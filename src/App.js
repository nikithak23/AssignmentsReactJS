import React,{useState} from "react";
import "./App.css";
import {  Form } from 'react-bootstrap';
import { FaRegCheckSquare, FaRegSquare, IconName } from "react-icons/fa";//initiall just mention-->import { IconName} from "react-icons/fa"; ->rest of them will import thmselves
import { IconName1, MdArticle, MdDelete, MdModeEditOutline } from "react-icons/md"; // initiall just mention-->import { IconName1 } from "react-icons/md";  ->rest of them will import thmselves



function Todo({ todo, index, markTodo, removeTodo }) {
  return (
      <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
      <div>
        {todo.isDone?(<FaRegCheckSquare className="regCheckSqIcon"  onClick={() => markTodo(index)}/>
        ):(<FaRegSquare className="regSqIcon" onClick={() => markTodo(index)}/>
        )}
        <MdModeEditOutline className="editIcon"/>
        <MdDelete className="deleteIcon" onClick={() => removeTodo(index)}/>
      </div>
    </div>
  );
}

function Buttons({doneTodos,todoTodos}){
  return(
    <div className="btnContainer">
    <button className="allBtn" >All</button>
    <button className="doneBtn" onClick={doneTodos}>Done</button>
    <button className="todoBtn" onClick={todoTodos}>Todo</button>
    </div>
  )
}


function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <Form className="ipContainer" onSubmit={handleSubmit}> 
      <div className="ipContIn">
        <MdArticle className="ipIcon"/>
        <input type="text" className="ip" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </div>
      <button className="addBtn" type="submit">Add New Task</button>
    </Form>
  );
}



function App() {
  const [todos, setTodos] = useState([
    // {
    //   text: " ",
    //   isDone: false
    // }
  ]);
  const [done,setDone]=useState([]);
  const [tobedone,setTobeDone]=useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const doneTodos=()=>{
    const newTodos =todos.filter((item)=>{
      return item.isDone;
    });
    setDone(newTodos);
    console.log('Done:',newTodos)
  }
  const todoTodos=()=>{
    const newTodos =todos.filter((item)=>{
      return !item.isDone;
    });
    setTobeDone(newTodos)
    console.log('Todo:',newTodos);
  }
  const deleteDone=()=>{
    const newTodos=todos.filter((item)=>{
      return !item.isDone;
    });
    setTodos(newTodos);
    console.log(newTodos)
  }
  const deleteAll=()=>{
    const newTodos=[];
    setTodos(newTodos);
  };



  return (
      <div className="containerMain">
        <h1 className="header1">TodoInput</h1>
        <TodoInput addTodo={addTodo} />
        {todos.length>0?(
        <div>
        <h1 className="header2">TodoList</h1>
        <Buttons doneTodos={doneTodos} todoTodos={todoTodos}/>
            {todos.map((todo, index) => (
            <div className="list">
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
            </div>
          ))}
        </div>
        ):null}
        <div className="btnContainer">
        {todos.length>0?(
        <>
        <button className="btn" onClick={deleteDone}>Delete done tasks</button>
        <button className="btn" onClick={deleteAll}>Delete all tasks</button>
        </>):null}
        </div>
      </div>
  );
}

export default App;