import { useEffect, useState } from "react";
const Exercise=(props)=>{
    
    const [childArr,setChildArr]=useState([]);
    useEffect(()=>{
       setChildArr(props.my_arr)
    },[props.my_arr])
    const showArr=props.my_arr.map((value,index)=><p key={index}>{value}</p>);

    return(
      <>
      {showArr}
      <button onClick={()=>{
        props.my_update(5);
      }}>modify</button>
      </>
        
        
    )
}
export default Exercise;