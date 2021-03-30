import React from 'react';

const Event = ({event}) => {
    const handleDelete=(id)=>{
        fetch('http://localhost:3001/deleteEvent/'+id, {
            method:'DELETE',
        })
        .then(res=> res.json())
        .then(data=> console.log('deleted successfully'))
    }
    return (
        <div className='col-md-4 col-lg-2'>
            <img  style={{height: '300px'}} src={event.imgURL} alt=""/>
            <h3 className='text-center'>{event.name} </h3>
            <button className='btn btn-success' onClick={()=>handleDelete(event._id)}>Delete</button>
        </div>
    );
};

export default Event;