import React from 'react';
import {useState,useEffect} from 'react';

const Scarch = () => {

    const helderChange = event =>{

        console.log(event.target.value)
        setScarch(event.target.value)
    }
 const [scarch , setScarch]= useState([]);

const [user ,  setUser]= useState([]);

useEffect(()=>{

    fetch(`https://restcountries.eu/rest/v2/name/${scarch}`)
    .then(res => res.json())
    .then(data => setUser(data))

},[scarch])

    return (
        <div>
            <h1>Search box :</h1>
            <input type ="text" onChange={helderChange} placeholder =" Search Box" />
            <p>scarch : {scarch}</p>
            <p>user length : {user?.length || 0}</p>
            {

                user?.map(bd => <li>{bd.name}</li>)
            }
            
        </div>
    );
};

export default Scarch;