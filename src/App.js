import './App.css';
import logo from './assets/BridgeLabz-2.jpg'
import {useState} from 'react'


function App() {
  let initialName = {
    name:"Avani"
  }
  const [name,setName] = useState(initialName)
  return (
    <div className="App">
      <img className="image" src={logo}/>
      <h1>Hello From {name.name}</h1>
    </div>
  );
}

export default App;
