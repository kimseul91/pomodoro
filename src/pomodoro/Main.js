import {useState } from 'react'

function Main () {

    const [currTime, setCurrTime] = useState();

    // let currTime = Date();

    setInterval(() => {
        let time = new Date();
        
        setCurrTime(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    }, 1000);

    
    return (
        <div>
            Main part
            current time is {currTime}
        </div>

    )
}


export default Main;