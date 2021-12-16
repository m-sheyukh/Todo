import React , { useState } from 'react';
import data from './Data/data.json';
import ToDoList from './Components/ToDoList';

//components
import Header from "./Components/Header";
 


function App() {
  
  const [ toDoList, setToDoList ] = useState(data);
 
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
   </div>
 );
}
 
export default App;