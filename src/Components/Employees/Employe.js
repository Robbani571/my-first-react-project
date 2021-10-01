import React from 'react';
import './Employe.css';
const Employe = (props) => {
    const { name, id, image, age, salary, gender } = props.employe;
    
    return (
        <div Style="margin-bottom: 10px; margin-right: 2px;
        background-color: lightgreen;" ClassName='col'>
            <div ClassName='Card'>
                <img src = {image} alt=""/>
                <h2>{name}</h2>
                <h3>{gender}</h3>
                <h4>{age}</h4>
                <h5>{salary}</h5>
                <p>{id}</p>
            </div>
        </div>
    );
};

export default Employe;