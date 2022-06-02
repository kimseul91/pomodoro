import {useState, useEffect} from 'react';

function Timer(props) {
    const [startTime, setStartTime] = useState(0);

    setInterval(() => {
        let time = new Date();
        setStartTime(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

    }, 1000);
    return (
        <div>
            timer section {startTime}
            and current time is {props.currtime}
        </div>
    )

}



export default Timer;