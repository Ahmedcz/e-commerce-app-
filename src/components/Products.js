import React from 'react';
import toyota from '../assets/images/toyota_camry2023.png'
import honda from '../assets/images/honda_civic2023.png';
import ford from '../assets/images/ford_mustang2023.png';
import { Link } from 'react-router-dom';


function Products() {

    const cars = [
        { id: 1, name: 'Toyota Camry', price: 25000, img: toyota },
        { id: 2, name: 'Honda Civic', price: 27000, img: honda },
        { id: 3, name: 'Ford Mustang', price: 35000, img: ford },
    ]

    return (
        <div>
            <h2>Find The Best Deals</h2>
            <h2>Available Cars</h2>
            <ul>{
              cars.map(car => (
                <li key={car.id}>
                <img src={car.img} alt={car.name}/>
                    <h3>{car.name}</h3>
                    <p>Price: ${car.price}</p>
                    <Link to={`/product-details/${car.id}`} target="_blank">More Details</Link>
                </li>
              ))
            }</ul>
    
            
        </div>
    )
}

export default Products;