import React from 'react';
import { useParams, Link } from 'react-router-dom';    



function ProductDetails( { addToCart }) {
 const { id }  = useParams();

 const Products = {
    1: {Name: "Toyota Camry", Engine: '2.5L Inline-4 Gas' , Drivetrain: 'Front-Wheel Drive' , Transmission: '8-Speed Automatic', Warranty: '5 Years / 100000 km' },
    2: {Name: "Honda Civic", Engine: 'Turbocharged DOHC 16-valve Inline-4', Drivetrain: 'Front-Wheel-Drive,', Transmission: 'Continuously Variable Automatic', Warranty: '3 Years / 60000 km'},
    3: {Name: "Ford Mustang", Engine: 'Intercooled Turbo Premium Unleaded I-4', Drivetrain: 'Rear Wheel Drive with limited-slip differential', Transmission: '10-speed automatic transmission', Warranty: '3 years / 60000 km'},

 };

 const product = Products[id]; 

 const handleAddToCart = () => {
   addToCart(product)
};


 return (
    <div>
       <h2>Car Details</h2>
       {
        product && (
              <>
                <p>{product.Name}</p>
                <p>{product.Engine}</p>
                <p>{product.Drivetrain}</p>
                <p>{product.Transmission}</p>
                <p>{product.Warranty}</p>
                <Link to="/Cart">
                  <button onClick={handleAddToCart}>Add to Cart</button>
                </Link>
                <button>Book a Test Drive</button>
             </>
       )}
    </div>
 );
}
export default ProductDetails;
