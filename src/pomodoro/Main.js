import {useEffect, useState } from 'react'
import Timer from './timer/Timer.js'

function Main () {

    const [currTime, setCurrTime] = useState();

    // let currTime = Date();
    useEffect(()=>{
        let time = new Date();
        setCurrTime(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        
    },[currTime])

    
    setInterval(() => {
        let time = new Date();
        setCurrTime(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    }, 1000);
    
    return (
        <div>
            Main part
            current time is {currTime}
            <Timer currtime = {currTime}/>
        </div>

    )
}


export default Main;