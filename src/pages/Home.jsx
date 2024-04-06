import React , { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import "./Home.css";

function Home() {
	const [recipes, setRecipes] = useState([]);
   const [ isLoading, setIsLoading ] = useState(false);
   const [ searchText, setSearchText ] = useState("");
   const [rating, setRating] = useState(0); // initial rating value

   // Catch Rating value
   const handleRating = (rate) => {
      setRating(rate);
   // Some logic
   };


	useEffect(() => {
		getRecipes();
	}, []);


   useEffect(() => {
      setIsLoading(true);
      fetch(`https://gurka-jum9z.ondigitalocean.app/recipes?query=${searchText}`)
         .then(res => res.json())
         .then(json => {
            setIsLoading(false)
            setRecipes(json)
         })
   }, [searchText]);


const getRecipes = async () => {
	const api = await fetch(`https://gurka-jum9z.ondigitalocean.app/recipes=${searchText}`);
	const data = await api.json();
	setRecipes(data);	
};

return (


   
	<div className="wrapper">

      <section>
			<input className="searchbar" type="text" onChange={event => setSearchText(event.target.value)} placeholder="Sök recept" />
      </section>


	   {recipes.map((recipe) => {
		   return (
            <div className="homeCard" key={recipe._id}>
		   	   <div className="homeRecipes">
                  <div className="homeRecipeImg">
                     <img src={recipe.imageUrl} alt={recipe.title}/>
 			         </div>
                  <div className="homeRecipeTitle">
 				         <div className="homeRecipeName">
                        <h2>{recipe.title}</h2>
                        
                        {/* Use rating value */}
                        {/* {rating} */}
 				         </div>
 				         <div className="homeRecipeDescription">
                        <p>{recipe.description}</p>
 				         </div>
 				         <div className="homeRecipeIngredients">
 					         <p>{recipe.ingredients.length} Ingredienster | {recipe.timeInMins} Min
                           <Rating
                              className='foo' // Will remove the inline style if applied
                              key={recipe._id}
                              ratingValue={rating}
                              initialValue = {recipe.avgRating}
                              iconsCount={5}
                              size={20}
                              readonly = 'false'
                              fillColor='orange'
                              allowHalfIcon = 'true'
                              emptyColor='gray'
                           />
                        </p>
 				         </div>
                  </div>
               </div>
            </div>
         );
	   })}
	</div>
);
};

export default Home;
