import { useReducer } from "react";
import { useState } from "react";


const ReducerPractice=()=>{
   const [input,setInput]=useState('');
  
   const update=(state,action)=>{
       switch(action.type){
        case 'addAge':
            return{
                ...state,
                age:state.age+action.param
            }
        case 'changeName':
            return{
                ...state,
                name:state.name+action.param
            }
        default:
            return state;
       }
   }
   const [state,dispatch]=useReducer(update,{name:'BN',age:20});

   return(
    <>

    {state.name} {state.age}
    <p>{input}</p>
    <input type='text' value={input} onChange={e=>setInput(e.target.value)}/>
    <button onClick={()=>{dispatch({type:'addAge',param:2})}}>Age</button>
    <button onClick={()=>{dispatch({type:'changeName',param:input})}}>Name</button>

    </>
   )
}

export default ReducerPractice;