import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employe from '../Employees/Employe';
import './Body.css';
const Body = () => {
    const [employes, setEmployes] = useState([]);

    useEffect(() => {
        fetch("./data.JSON")
          .then(res => res.json())
          .then(data => setEmployes(data))
      }, []);
    return (
        <div className='Body'>
          <div className='row row-cols-md-3 row-cols-sm-1  card-group'>
          {
              employes.map(employe => <Employe employe={employe}></Employe>)
          }
          </div>

          <Cart></Cart> 
        </div>
    );
};

export default Body;