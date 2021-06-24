import React,{useState} from 'react';
import './CardInputs.css';
import Card from './Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
export default function CardInputs(props){
    

    //Handling the states of inputs of our form (by using 'useState' Hook)
    const [userName, setUsername] = useState('');
    const [age,setAge] = useState('')

    const [isValid,setIsValid] = useState(true)

    const NameInputHandler = (e) =>{
        if(e.target.value.trim().length > 0){
            setIsValid(true)
        }
        setUsername(e.target.value)
    }
    const AgeInputHandler = (e) =>{
        if(e.target.value > 0){
           setIsValid(true)
        }
        setAge(e.target.value)
    }

    const onSubmitFormHandler = (e) =>{
        e.preventDefault();

        if(userName.length === 0 || age <= 0){
            setIsValid(false)
            return;
        }

        const Data = 
            {
                name : userName,
                age : age,
                id : null 
            
            }

        
        //Clearing the inputs after geeting value from them
        setUsername('');
        setAge('');

        props.userData(Data)
    }

    const closeBtnHandler =()=>{
        setIsValid(true)
    }


    return(
        
        <form onSubmit = {onSubmitFormHandler}>
            
            {!isValid && <ErrorModal isValid = {isValid} onConfirm = {closeBtnHandler}/>}

            {/* Using Card-Component as a reuseable component */}
            <Card className = 'form-control'>
            
                {/* User Inputs */}
                <div>
                <label>Username</label>
                <input type = 'text' value = {userName} onChange = {NameInputHandler}></input>



                <label>Age</label>
                <input type = 'number' value = {age} onChange = {AgeInputHandler}></input>

                {/* Button-component which is reusable */}
                <Button>Add User</Button>
                </div>   

            </Card>
            
        </form>
    )
}

