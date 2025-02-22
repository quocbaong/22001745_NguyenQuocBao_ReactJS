import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var style ={
    li:{
      listStyleType: 'none',
      margin: '10px',
      paddingLeft: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }

  const [todos, setToDos] = useState([])
  const [text, setText] = useState("")

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleClick() {
    setToDos([...todos,text])
  }

  return (
    <>
      <input onChange={handleChange} type="text" />
      <br />
      <br />
      <button onClick={handleClick}>Add</button>

      <ul>
        {todos.map((todo,i) => (
          <li style={style.li} key={i}> {todo}

          </li>
        ))}
      </ul>
    </>
  )
}

export default App
