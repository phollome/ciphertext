import React from "react";
import { Stage } from "./components";

function Solution() {
  React.useEffect(() => {
    const plainTextInput = document.getElementById("plain-text");
    const encryptedText = document.getElementById("encrypted-text");

    const cipherTextInput = document.getElementById("cipher-text");
    const decryptedText = document.getElementById("decrypted-text");

    const alphabet = document.getElementById("alphabet") as HTMLInputElement;
    const cipherAlphabet = document.getElementById(
      "cipher-alphabet"
    ) as HTMLInputElement;

    if (
      alphabet !== null &&
      cipherAlphabet !== null &&
      plainTextInput !== null &&
      encryptedText !== null &&
      cipherTextInput !== null &&
      decryptedText !== null
    ) {
      alphabet.value = "abcdefghijklmnopqrstuvwxyz";
      cipherAlphabet.value = "bcdefghijklmnopqrstuvwxyza";

      plainTextInput.oninput = function (event) {
        const inputEvent = event as InputEvent;

        if (inputEvent.data === null) {
          return;
        }

        const position = alphabet.value.indexOf(inputEvent.data);
        encryptedText.innerText =
          encryptedText.innerText + cipherAlphabet.value.charAt(position);
      };

      cipherTextInput.oninput = function (event) {
        const inputEvent = event as InputEvent;

        if (inputEvent.data === null) {
          return;
        }

        const position = cipherAlphabet.value.indexOf(inputEvent.data);
        decryptedText.innerText =
          decryptedText.innerText + alphabet.value.charAt(position);
      };
    }
  }, []);

  return (
    <div className="h-dvh bg-slate-700 flex gap-2 p-2">
      <div className="w-full h-full flex items-center justify-center">
        <Stage />
      </div>
    </div>
  );
}

export default Solution;
