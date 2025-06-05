import React from "react";

function DynamicDashboard() {
  const userName = "Bahar";
  const isPremium = true;
  const tasks=[{taskName: practice React,copleted: true},
    {taskName: practice Break,copleted: true},
    {taskName: practice Java,copleted: false}];
    const completedTasks=tasks.filter(task=>task.completed).length;
    const incompletedTasks=tasks.length-completedTasks;

  return (
    <>
      <h1>Hello {userName}</h1>
      <h2>
        {isPremium ? "Thank you for being our member!" : "Please join us"}
      </h2>
      <h2>My Tasks</h2>
      <ul>{tasks.map((task,index)=>
      (<li key={index}>
      {tasks.taskName}{task.completed?"✅": "❌"}
      </li>
      </ul>
    </>
       ) ;
}

export default DynamicDashboard;
