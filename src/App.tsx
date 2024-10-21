import { Editor, Stage } from "./components";

function App() {
  return (
    <div className="h-dvh bg-slate-700 flex gap-2 p-2">
      <div className="w-1/2 h-full">
        <div className="h-full flex items-center justify-center">
            <Stage />
        </div>
      </div>
      <div className="w-1/2 h-full">
        <div className="h-full bg-slate-800">
          <Editor fontSize={14} />
        </div>
      </div>
    </div>
  );
}

export default App;
