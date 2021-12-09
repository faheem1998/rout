import React, {useEffect, useState} from 'react';

const Timer = () =>
{
    const [value,setValue]=useState(0);
    const colors=[
        'yellow',
        'blue',
        'green',
        'pink',
        'red'
    ]
    useEffect(() => {
        setTimeout(() => {
          setValue((v)=>(v==4?0:v+1));
        }, 5000);
        document.body.style.backgroundColor=colors[value]
          
      });
      return<></>
    
}

export default Timer;