import React from "react";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { children, ...otherProps } = props;
  const label = React.createElement(
    "label",
    {
      className: "font-thin text-lg text-slate-50",
      htmlFor: typeof props.id !== "undefined" && `#${props.id}`,
    },
    children
  );

  console.log(label);

  return (
    <div className="flex flex-col gap">
      {label}
      <input
        {...otherProps}
        className="font-thin text-xl px-4 py-2 border-2 border-transparent rounded-lg bg-slate-600 text-slate-50 outline-none focus:border-slate-50"
      />
    </div>
  );
}

function Stage() {
  const encryptedTextRef = React.useRef<HTMLParagraphElement>(null);
  const decryptedTextRef = React.useRef<HTMLParagraphElement>(null);

  return (
    <div
      id="stage"
      className="w-96 overflow-scroll flex flex-col items-center gap-10 p-8 rounded-xl border-4 border-slate-800"
    >
      <div className="w-full flex flex-col gap-4">
        <Input
          id="alphabet"
          defaultValue="abcdef"
          placeholder="insert alphabet"
        >
          <label>Alphabet</label>
        </Input>
        <div className="flex flex-col gap">
          <label
            htmlFor="#cipher-alphabet"
            className="font-thin text-lg text-slate-50"
          >
            Cipher Alphabet
          </label>
          <input
            id="cipher-alphabet"
            className="font-thin text-xl px-4 py-2 border-2 border-transparent rounded-lg bg-slate-600 text-slate-50 outline-none focus:border-slate-50"
            defaultValue="cfbdae"
            placeholder="insert cipher alphabet"
          />
        </div>
        <div className="flex flex-col gap">
          <label
            htmlFor="#plain-text"
            className="font-thin text-lg text-slate-50"
          >
            Plain Text
          </label>
          <input
            id="plain-text"
            className="font-thin text-xl px-4 py-2 border-2 border-transparent rounded-lg bg-slate-600 text-slate-50 outline-none focus:border-slate-50"
            placeholder="insert plain text"
          />
        </div>
        <div className="flex gap-2">
          <p
            id="encrypted-text"
            ref={encryptedTextRef}
            className="min-h-8 text-center font-thin text-xl text-slate-50 border-b overflow-scroll flex-1"
          ></p>
          <button
            className="rounded-full bg-slate-500 hover:bg-slate-600 active:bg-slate-700 w-10 h-10 flex justify-center items-center"
            onClick={() => {
              if (encryptedTextRef.current === null) {
                return;
              }
              encryptedTextRef.current.textContent = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap">
          <label
            htmlFor="#cipher-text"
            className="font-thin text-lg text-slate-50"
          >
            Cipher Text
          </label>

          <input
            id="cipher-text"
            className="font-thin text-xl px-4 py-2 border-2 border-transparent rounded-lg bg-slate-600 text-slate-50 outline-none focus:border-slate-50"
            placeholder="insert cipher text"
          />
        </div>
        <div className="flex gap-2">
          <p
            id="decrypted-text"
            ref={decryptedTextRef}
            className="min-h-8 text-center font-thin text-xl text-slate-50 border-b overflow-scroll flex-1"
          ></p>
          <button className="rounded-full bg-slate-500 hover:bg-slate-600 active:bg-slate-700 w-10 h-10 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stage;
