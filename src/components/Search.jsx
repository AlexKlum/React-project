import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import "./Search.css";



function Search() {
   const [ recipes, setRecipes ] = useState([]);
   const [ isLoading, setIsLoading ] = useState(false);
   const [ searchText, setSearchText ] = useState("");

useEffect(() => {
   setIsLoading(true);
   fetch(`https://gurka-jum9z.ondigitalocean.app/recipes?query=${searchText}`)
      .then(res => res.json())
      .then(json => {
         setIsLoading(false)
         setRecipes(json)
      })
}, [searchText]);


	return (
		<section>
			<input className="searchbar" type="text" onChange={event => setSearchText(event.target.value)} placeholder="Sök recept" />
      </section>



	);
};


export default Search;
