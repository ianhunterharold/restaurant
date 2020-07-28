import React from 'react';
import { useEffect, useState } from 'react';


export default function Restaurant(){
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=> {
        fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',{
            method: 'GET',
            headers: {
              Authorization: `Api-Key q3MNxtfep8Gt`,
            }
          })
          .then(r => r.json())
          .then(r => {
            setRestaurants(r)
          })
    },[])

    const card = () => {
      return (
        <div>
          
        </div>
      )
    }

    return(
        <>
        Restaruants 
        </>
    );
};
