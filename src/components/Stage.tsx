function Stage() {
  return (
    <div className="max-w-full overflow-scroll flex flex-col items-center gap-10">
      <input
        id="plaintext"
        className="font-thin text-xl px-4 py-2 rounded-lg bg-slate-600 text-slate-50 outline-none focus:border-2"
        placeholder="insert text"
      />
      <p id="cyphertext" className="break-all min-h-8 min-w-4 text-center font-thin text-2xl text-slate-50 border-b"></p>
    </div>
  );
}

export default Stage;
