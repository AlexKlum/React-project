import React , { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import "./Category.css";

function Categories() {
	const [ recipes, setRecipes ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ searchText, setSearchText ] = useState("");
	const [ rating, setRating ] = useState(0); // initial rating value
	let params = useParams();
 
	// Catch Rating value
	const handleRating = (rate) => {
	   setRating(rate);
	// Some logic
	};
  
	const getRecipes = async (name) => {
	  const data = await fetch(
		`https://gurka-jum9z.ondigitalocean.app/categories/${name}`  
      // GET {{baseUrl}}/categories/Förrätt/recipes?query=brus      ?



	  );
	  const recipes = await data.json();
	  setRecipes(recipes);
	};
  
	useEffect(() => {
	  getRecipes(params.type);
	  console.log(params.type);
	}, [params.type]);
  

	return (
	
	




      
	   
		<div className="wrapper">
   
		  <section>
				<input className="searchbar" type="text" onChange={event => setSearchText(event.target.value)} placeholder="Sök recept" />
		  </section>
   
   
		   {recipes.categories.map((recipe) => {
			   return (
				<div className="homeCard" key={recipe._id}>
					  <div className="homeRecipes">
					  <div className="homeRecipeImg">
						 <img src={recipe.imageUrl} alt={recipe.title}/>
						  </div>
					  <div className="homeRecipeTitle">
							  <div className="homeRecipeName">
							<h2><a href="">{recipe.title}</a></h2>
						   
							{/* Use rating value */}
							{/* {rating} */}
							  </div>
							  <div className="homeRecipeDescription">
							<p>{recipe.description}</p>
							  </div>
							  <div className="homeRecipeIngredients">
								  <p>{recipe.ingredients.length} Ingredienster | {recipe.timeInMins} Min
							   <Rating
								  className='foo' 
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

export default Categories;
