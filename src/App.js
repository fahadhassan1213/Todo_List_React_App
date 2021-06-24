import React,{useState} from 'react'
import './App.css';
import CardList from './Components/Card/CardList';
import CardInputs from './Components/Card/CardInputs';
function App() {

   const [usersData,setUserData] =  useState([

    {name: 'Fahad', age:22, id:'u1'},
    {name: 'Ahsan', age:17, id:'u2'},

    ])


  const userDataHandler = (enteredData) =>{
    setUserData((prevData) =>{
      const updatedData = [...prevData];
      updatedData.unshift({name:enteredData.name, age:enteredData.age, id:Math.random().toString()})
      return updatedData;
    })
  }

  return (
    <div>

      <div className = 'Card-Inputs'>
        <CardInputs userData = {userDataHandler} />
      </div>

      <div className = 'Card-List'>
        <CardList userData = {usersData}></CardList>
      </div>
      
      

    </div>

    
  );
}

export default App;
