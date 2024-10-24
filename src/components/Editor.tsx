import * as MonacoEditor from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import { stripIndent } from "common-tags";
import localforage from "localforage";
import * as prettier from "prettier";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import React from "react";
import { createHighlighter } from "shiki";
import Button from "./Button";

function evaluate(code: string): Error | null {
  try {
    eval(code);
    return null;
  } catch (error) {
    return error as Error;
  }
}

const defaultValue = stripIndent`
  const plainTextInput = document.getElementById("plain-text");
  const encryptedText = document.getElementById("encrypted-text");

  const cipherTextInput = document.getElementById("cipher-text");
  const decryptedText = document.getElementById("decrypted-text");

  plainTextInput.oninput = function (event) {
    encryptedText.innerText = encryptedText.innerText + event.data;
  };

  cipherTextInput.oninput = function (event) {
    decryptedText.innerText = decryptedText.innerText + event.data;
  };
`;

function Editor(props: { height?: string; fontSize?: number }) {
  const { height = "100%", fontSize = 12 } = props;

  const ref = React.useRef<Parameters<MonacoEditor.OnMount>[0] | null>(null);
  const beforeMount = async (monaco: MonacoEditor.Monaco) => {
    monaco.languages.register({ id: "javascript" });
    const highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["javascript"],
    });

    shikiToMonaco(highlighter, monaco);
  };

  const onMount: MonacoEditor.OnMount = (editor) => {
    ref.current = editor;

    async function load() {
      const value = await localforage.getItem<string>("code");

      if (value !== null && value !== "") {
        editor.setValue(value);
      }

      onRun();
    }

    let timeout: ReturnType<typeof setTimeout>;
    function handleBlurEditor() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (ref.current === null) {
          return;
        }
        localforage.setItem("code", ref.current.getValue());
      }, 1000);
    }

    load();

    ref.current.onDidBlurEditorText(handleBlurEditor);
    return () => {
      if (ref.current === null) {
        return;
      }
      ref.current.dispose();
    };
  };

  const onFormat = () => {
    async function format() {
      if (ref.current === null) {
        return;
      }

      const value = ref.current.getValue();

      const formatted = await prettier.format(value, {
        parser: "babel",
        plugins: [prettierPluginBabel, prettierPluginEstree],
      });

      await localforage.setItem("code", formatted);

      ref.current.setValue(formatted);
    }
    format();
  };

  const onRun = () => {
    async function run() {
      if (ref.current === null) {
        return;
      }

      const value = ref.current.getValue();

      const error = evaluate(value);

      if (error !== null) {
        console.error(error);
      } else {
        const formatted = await prettier.format(value, {
          parser: "babel",
          plugins: [prettierPluginBabel, prettierPluginEstree],
        });

        await localforage.setItem("code", formatted);

        ref.current.setValue(formatted);
      }
    }
    run();
  };

  const onReset = () => {
    async function reset() {
      if (ref.current === null) {
        return;
      }
      await localforage.removeItem("code");
      ref.current.setValue(defaultValue);

      onRun();
    }

    reset();
  };

  return (
    <div className="relative h-full">
      <MonacoEditor.Editor
        height={height}
        defaultLanguage="javascript"
        defaultValue={defaultValue}
        beforeMount={beforeMount}
        onMount={onMount}
        options={{ minimap: { enabled: false }, fontSize, tabSize: 2 }}
      />
      <div className="absolute bottom-0 right-0 p-4 flex gap-2">
        <Button onClick={onReset}>Reset</Button>
        <Button onClick={onFormat}>Format</Button>
        <Button onClick={onRun}>Run</Button>
      </div>
    </div>
  );
}

export default Editor;
