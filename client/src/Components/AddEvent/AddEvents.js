import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const axios = require('axios').default;
    const { register, handleSubmit, watch, errors } = useForm();

    const [imgURL,setImageURL] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imgURL: imgURL
        }
        fetch('http://localhost:3001/addEvent', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(eventData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    };
    
    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key','3870c154d57c9cf79d3e734926dc16fe');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
              console.log(response.data.data?.display_url);
            setImageURL(response.data.data?.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='container'>
                <input className="form-control" name="name" placeholder="new event" ref={register} />
                <br/>
                <input type="file" name="image" onChange={handleImage} />
                <br/>   
                <input className='mt-3' type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;