import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let initialName = {
    name:"Avani"
  }
  const [name,setName] = useState(initialName)
  return (
    <div className="App">
      <h1>Hello From {name.name}</h1>
    </div>
  );
}

export default App;
