import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    
    const [events,setEvents] = useState([]);

    const fetchData = ()=>{
        fetch('http://localhost:3001/events')
        .then(res=> res.json())
        .then(data => setEvents(data))
        .catch(err=> console.log(err))
    }

    useEffect(()=>{
        fetchData();
    },[events])
    
    return (
        <div className='row'>
            {
                events.map(event => <Event event={event}/>)
            }
        </div>
    );
};

export default Home;