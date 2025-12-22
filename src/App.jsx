import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "estudar para se tornar dev",
    isCompleted: false
  },
  {
    id: 2,
    title: "estudar ingles",
    description: "estudar ingles para ficar fluente",
    isCompleted: false
  }
]);

  function onAddTaskSubmit(title, description){
    const newTask = {
      // v4() gera um id único para cada tarefa
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(TaskId) {
    const newTasks = tasks.map(task => {
      if (task.id == TaskId) {
        return { ...task, isCompleted: !task.isCompleted}
      }

      return task
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  } 

  /*function onAddTaskClick(){
    const newTasks = [...tasks,{
      id: tasks.length + 1,
      title: `Nova Tarefa ${tasks.length + 1}`,
      description: "Descrição da nova tarefa",
      isCompleted: false}
    ];
    setTasks(newTasks); 
  }*/

  return(
    <div className="w-screen h-screen bg-slate-500 flex  justify-center p-6">
      <div className="w-[500] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks}
        onTaskClick = {onTaskClick}
        onDeleteTaskClick = {onDeleteTaskClick}
        />
      </div>
    </div>
  );

}

export default App; 