import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }
    setTodo([...todo, input]);
    setChecked([...checked, false]);
    setInput("");
  };

  const handleCheck = (i) => {
    setChecked((prev) => {
      const updated = [...prev];
      updated[i] = !updated[i];
      return updated;
    });
  };

  const removeCheckedTasks = () => {
    setChecked((prev) => prev.filter((e) => e === false));

    setTodo((prev) => prev.filter((_, i) => checked[i] === false));
  };

  return (
    <>
      <div className="to-do-container w-[400px] text-center">
        <h1 className="text-4xl font-bold text-zinc-200">Just Do It.</h1>
        <div className="input-box mt-4">
          <form className="flex items-center gap-2" action="" onSubmit={(e) => handleAdd(e)}>
            <input type="text" placeholder="Type your to do..." className="border border-zinc-400 rounded-md p-2 text-zinc-400 w-full" onChange={(e) => setInput(e.target.value)} value={input} />

            <div className="plus-box flex justify-center items-center w-12 h-10 bg-zinc-300 text-lg rounded-lg hover:bg-zinc-400 cursor-pointer" onClick={(e) => handleAdd(e)}>
              +
            </div>
          </form>
        </div>
        <div className="to-do-list flex flex-col gap-4 text-zinc-400 text-left mt-4">
          {todo.map((e, i) => (
            <div key={i} className="flex items-center justify-between px-4">
              <p className={`${checked[i] ? "line-through" : ""}`}>{e}</p>
              <div className="">
                <i className={`${checked[i] ? "ri-close-line ri-lg" : "ri-check-line ri-lg"}`} onClick={() => handleCheck(i)}></i>
              </div>
            </div>
          ))}
        </div>
        {todo.length == 0 && (
          <div>
            <h1 className="text-xl text-zinc-400 mt-2">You are free!</h1>
          </div>
        )}
        {todo.length >= 1 && (
          <div className="flex gap-2 items-center text-left bg-zinc-400 w-fit p-2 rounded-md text-base mt-8 text-zinc-800 hover:bg-zinc-500" onClick={() => removeCheckedTasks()}>
            <i className="ri-delete-bin-line ri-lg"></i>
            <p>Remove Done Tasks</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
