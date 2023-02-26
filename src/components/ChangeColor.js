import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {changeColor} from '../features/theme'

const ChangeColor = () => {

    //useState hook will manage the states locally.
    //color is a local state whose initial value is blank.
    //setColor is a method which will update the value of our color state.
    const [color,setColor] = useState("");

    //useDispatch hook is used to dispatch actions.
    const dispatch = useDispatch();
  return (
    <>
        {/* We are passing the value of input field by using event.target.value into the setColor method, which will update our color state's value to the one written inside input field, so if user enters "red" in input field, the value of our state named color will become red (which as empty initially). */}
        
        <input placeholder="Enter name of the color " type="text" onChange={(event)=>{setColor(event.target.value)}}/>

        {/* Inside dispatch() we are passing name of action changeColor(), in which we have passed the state called color (fetch by using useState) which will contain the value that the user has written inside the input field. */}
        <button onClick={()=>{dispatch(changeColor(color))}}> Change color : </button>
    </>
  )
}

export default ChangeColor