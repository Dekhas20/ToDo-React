import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function taskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)

  function saveTask(e) {
    e.preventDefault();
    createTask(tittle, description);
    setTittle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <form action="" onSubmit={saveTask} className="bg-slate-800 p-10 mb-4 rounded-md">
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle} autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Escribe la descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default taskForm;
