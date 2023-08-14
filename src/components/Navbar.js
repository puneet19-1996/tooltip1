import React,{useState} from 'react';
import Tip from './Tip';


export default function Navbar() {
    //use to set the position of a button 
    const[position,setPosition]=useState('top');
    

    //this function will run when the button will press and set the positon of a button 
    const handleClick=(pos)=>{
       
        setPosition(pos);
    }



    
  return (
    <>
    <div id='btn'>
      <button  onClick={()=>handleClick('top')}>Top</button>
      <button  onClick={()=>handleClick('left')}>left</button>
      <button  onClick={()=>handleClick('right')}>right</button>
      <button  onClick={()=>handleClick('bottom')}>bottom</button>
    </div>

    
    <Tip pos={position}/>
    
    </>

    


  )
}
