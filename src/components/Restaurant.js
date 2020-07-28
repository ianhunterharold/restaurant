import React from 'react';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Button';


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

    // const card = (data) => {

    //   return data.map((locale)=> {
    //     <div>
    //       <Card style={{ width: '20rem' }}>
    //         <Card.Body>
    //           <Card.Title>locale.name</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up the bulk of
    //             the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   })
    // }

  
    return(
      <>
        {restaurants.map( locale => locale.name ) }
      </>
    )
};
