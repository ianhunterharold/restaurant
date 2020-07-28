import React from 'react';
import { Component } from 'react';


class Restaurant extends Component {
    state ={
        restuarants: []
    }

    getRestaurants = () => {
        fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants',{
          method: 'GET',
          headers: {
            Authorization: `Api-Key q3MNxtfep8Gt`,
          }
        })
        .then(r=>r.json())
        .then(data=> {
          this.setState({restuarants: data})
        })
      }
    
      componentDidMount(){
        this.getRestaurants();
      }

    render(){
        return(
            <>
            Inside of my restuarnt component 
            </>
        )
    }
}


export default Restaurant;