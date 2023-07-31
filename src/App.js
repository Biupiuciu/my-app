
import './App.css';
import Exercise from './Exercise';
import Second from './Second';
import ReducerPractice from './ReducerPractice';

import { useState } from 'react';
import { createContext } from 'react';
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Jesse Hall");
  const [arr,setArr]=useState([1,2,3,4]);
  const updateArr=(number)=>
  {
    setArr([
      ...arr,
      number
    ]
    )
  }

  const [emoji,setE]=useState({
    type:'笑哭',
    number:1
  });
  const updateET=(input)=>{
    setE((prev)=>{
      return{
        ...emoji,
        type:input
      }
      
    }
    )
  }
  
  return (
    <UserContext.Provider value={user}>
      {user}
      <Second my_emoji={emoji} my_updateET={updateET}/>
      {/* <Exercise my_arr={arr} my_update={updateArr}/>
    <ReducerPractice/> */}
   

    </UserContext.Provider>
    
  );
}

export default App;
