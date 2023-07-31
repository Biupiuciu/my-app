import { useState,useContext, useEffect} from "react";

import UserContext from './App'
const Second=(props)=>{
   const user = useContext(UserContext);
  const[test,setTest]=useState("");
   const[inputT,setinputT]=useState("");
   const updateInput=(e)=>{
    setinputT(e.target.value);
   }
    useEffect(()=>{
      setTest(user);
    },[test]);
  // console.log(user);

   return(
    <>
      <div>
      <h2>user:{test}</h2>
        <p>type: {props.my_emoji.type}</p>
        <p>number: {props.my_emoji.number}</p>
        <input type='text' value={inputT} onChange={updateInput}/>
        <button onClick={()=>{
            props.my_updateET(inputT);
        }}>change</button>
        </div>
    </>
   )
}

export default Second;