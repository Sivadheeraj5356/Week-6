import React, { useEffect, useState } from "react";
function App() {
  const [selectid, setId] = useState(1)
  return <div>
    <button onClick={function () { setId(1) }}>1</button>
    <button onClick={function () { setId(2) }}>2</button>
    <button onClick={function () { setId(3) }}>3</button>
    <button onClick={function () { setId(4) }}>4</button>
    <button onClick={function () { setId(5) }}>5</button>
    <Todo id={selectid}></Todo>
  </div>
}
function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
  setTimeout(()=>{
      fetch("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(async (res) => {
          const json = await res.json()
          setTodo(json.todo)
        })
      },1000)
    }, [id])
  return <div>
    <h3>Id : {id}</h3>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
}

export default App