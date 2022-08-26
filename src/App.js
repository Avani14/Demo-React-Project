import './App.css';
import logo from './assets/BridgeLabz-2.jpg'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'

function App() {
  let initialName = {
    name:"",
    nameError:""
  }
  const [name,setName] = useState(initialName)
  const url = "https://www.bridgelabz.com/"
  const onClickLogo = (event)=>{
    window.open(url,"_blank")
  }
  const onNameChange = (event) =>{
    const nameReg = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$')
    if(nameReg.test(event.target.value)){
        setName({name:event.target.value,nameError:''})
    }
    else{
      setName({nameError:'Incorrect name'})
    }
  }
  return (
    <div className="App">
      <img className="image" src={logo} onClick={onClickLogo}/>
      <h1>Hello From {name.name}</h1>
      <input type="text" onChange={onNameChange}/><br />
      <span className="error-output">{name.nameError}</span>
    </div>
  );
}

export default App;
