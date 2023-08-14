import React from 'react';
import { Tooltip } from 'react-tooltip'

const Tip=(props)=> {
    

  return (
    <div className='Btnhover'>
    <a data-tooltip-id="my-tooltip" data-tooltip-content="Hover over me!" >
        <button id='hover_btn'>Hover over me</button>
    </a>
     
      <Tooltip id="my-tooltip" place={props.pos}/>
        
      
    </div>
  )
}
export default Tip;


