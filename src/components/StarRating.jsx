import React , { useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import "./StarRating.css";



function MyComponent() {
   
   const [recipes, setRecipes] = useState([]);
   const [rating, setRating] = useState(0); // initial rating value

   // Catch Rating value
   const handleRating = (rate) => {
      setRating(rate);
   // Some logic
   };

   const getRecipes = async () => {
	   const api = await fetch('https://gurka-jum9z.ondigitalocean.app/recipes');
   	const data = await api.json();
	   setRecipes(data);
	   console.log(data);	
   };

   useEffect(() => {
		getRecipes();
	}, []);

return (

	<div className="wrapper">

	   {recipes.map((recipe) => {
		   return (
      <div className='App' key={recipe._id}>
         <Rating
            className='foo' // Will remove the inline style if applied
            key={recipe._id}
            ratingValue={rating}
            onClick={handleRating}
            initialValue = {recipe.avgRating}
            iconsCount={5}
            size={30}
            readonly = 'false'
            fillColor='orange'
            allowHalfIcon = 'true'
            emptyColor='gray'
         />
         {/* Use rating value */}
         {/* {rating} */}
      </div>
         );
	   })}
	</div>
);
};

export default MyComponent;   