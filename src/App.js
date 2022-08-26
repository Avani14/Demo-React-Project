import './App.css';
import logo from './assets/BridgeLabz-2.jpg'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'

function App() {
  let initialName = {
    name:""
  }
  const [name,setName] = useState(initialName)
  const url = "https://www.bridgelabz.com/"
  const onClickLogo = (event)=>{
    window.open(url,"_blank")
  }
  const onNameChange = (event) =>{
    setName({name:event.target.value})
  }
  return (
    <div className="App">
      <img className="image" src={logo} onClick={onClickLogo}/>
      <h1>Hello From {name.name}</h1>
      <input type="text" onChange={onNameChange}/>
    </div>
  );
}

export default App;
