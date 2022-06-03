import {useState, useEffect} from 'react';

function Timer(props) {
    const [startTime, setStartTime] = useState(0);

    function set_Time () {
        let time = new Date();
        setStartTime(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    }
    
    return (
        <div>
            timer section {startTime} and current time is {props.currtime}
            <div>
                
            </div>
            <button onClick={() => {set_Time()}}> Start </button>
        </div>
    )

}



export default Timer;