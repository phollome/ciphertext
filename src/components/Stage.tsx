function Stage() {
  return (
    <div id="stage" className="w-96 overflow-scroll flex flex-col items-center gap-10 p-8 rounded-xl border-4 border-slate-800">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap">
          <label
            htmlFor="#alphabet"
            className="font-thin text-lg text-slate-50"
          >
            Alphabet
          </label>
          <input
            id="alphabet"
            className="font-thin text-xl px-4 py-2 border-2 border-transparent rounded-lg bg-slate-600 text-slate-50 outline-none focus:border-slate-50"
            defaultValue="abcdef"
            placeholder="insert alphabet"
          />
        </div>
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
        <p
          id="encrypted-text"
          className="min-h-8 text-center font-thin text-xl text-slate-50 border-b overflow-scroll"
        ></p>
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
      <p
        id="decrypted-text"
        className="break-all min-h-8 text-center font-thin text-lg text-slate-50 border-b line-clamp-1"
      ></p>
      </div>
    </div>
  );
}

export default Stage;
