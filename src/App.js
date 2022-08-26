import './App.css';
import logo from './assets/BridgeLabz-2.jpg'
import {useState} from 'react'


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
      <p className="paragraph">
      Bridgelabz is an AWS recognised incubator and is soley focused 
      on solving tech employability. Over the last 5 years, it has worked 
      with 500+ top tech companies and 2500+ engineers have been hired 
      from Bridgelabz. It has labs in Mumbai and Bangalore
      . It has partnered with over 500 companies, including Yatra, 
      Capgemini, Meru Cabs, LafargeHolcim, JDA, UrbanLadder, Fullerton India, 
      and RBL bank. Bridgelabz recently won Business World Techtor Award 2020 and 
      secured 2nd position at Global Edtech Startup Awards 2019, India. Also, was 
      selected by the Maharashtra state government as Top 100 Startups 2019. 
      More than 350+ learners placed in last 6 months despite covid downturn while most organizations were not hiring or were laying off!
      </p>
    </div>
  );
}

export default App;
