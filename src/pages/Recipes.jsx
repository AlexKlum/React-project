import React , { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { Link } from "react-router-dom";
import "./Recipes.css";

function Recipes() {
	const [ recipes, setRecipes ] = useState([]);
   const [ isLoading, setIsLoading ] = useState(false);
   const [ searchText, setSearchText ] = useState("");
   const [ rating, setRating ] = useState(0); // initial rating value
   const [ isRatingSent, setIsRatingSent ] = useState(false);

   // Catch Rating value
   const handleRating = (rate, recipeId) => {
      fetch(`https://gurka-jum9z.ondigitalocean.app/recipes/${recipeId}/ratings`, {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({ "rating": rate/20 })
       })
         .then()
         .then(json => {
            
            setIsRatingSent(true);
            console.log('rating sent');

         })

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
	const api = await fetch('https://gurka-jum9z.ondigitalocean.app/recipes');
	const data = await api.json();
	setRecipes(data);
	console.log(data);	
};




return (

	<div className="recipeWrapper">

      <section>
			<input className="searchbar" type="text" onChange={event => setSearchText(event.target.value)} placeholder="Sök recept" />
      </section>

	   {recipes.map((recipe) => {
		   return (
            <div className="recipePage" key={recipe._id}>


               <div className="recipeTitle">

                  <h1>{recipe.title}</h1>
                  
               </div>

               <div className="recipeInfoImage">
                  <div className="recipeDescription">
                     <p>{recipe.description}</p>
                     <br /><br />
                     <p>{recipe.ingredients.length} ingridientser | {recipe.timeInMins} min</p>
                     <Rating
                        className='foo3' // Will remove the inline style if applied
                        key = {recipe._id}
                        initialValue = {recipe.avgRating}
                        iconsCount = {5}
                        size = {20}
                        readonly = 'true'
                        fillColor = 'orange'
                        allowHalfIcon = {true}
                        emptyColor = 'gray'
                     />
                  </div>
                  <div className="recipeImage">
                     <img src={recipe.imageUrl} alt={recipe.title}/>
                  </div>
               </div>

               <div className="recipeIngridientsInstruction" >
                  <div className="recipeIngridients">




                  {/* {recipe.ingredients.map((ingredients) => (
                      <p>{ingredients.amount} {ingredients.unit} {ingredients.name}</p>
                  ))} */}
                  
                  
                  </div>
                  <div className="recipeInstructions">
                     <p>Gör så här: <br /> {recipe.instructions}</p>
                  </div>
               </div>

               <hr className="hr1" /> {/*black line with recpie rating*/}

               <div className="recipeRating">
                  <h2 className="ratingMessage">Vad tyckte du om receptet?</h2>
                     { isRatingSent ? <p >Tack för ditt betyg!</p>: 
                        <Rating
                           className='foo2' // Will remove the inline style if applied
                           key = {recipe._id}
                           ratingValue = {rating}
                           onClick = { (rate) => handleRating(rate, recipe._id) }
                           initialValue = {0}
                           iconsCount = {5}
                           size = {70}
                           fillColor = 'orange'
                           allowHalfIcon = {false}
                           emptyColor = 'gray'
                        />
                     }
               </div>

               <hr className="hr1" /> {/*black line with recpie rating*/}

               {/* <div className="recipeComments">
                  





                  
               </div>

               <hr /> */}
		   	   
            </div>
         );
	   })}
	</div>
);
};

export default Recipes;
