import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Recipes from "./pages/Recipes";

import "./RecipesPage.css";

function RecipesPage() {
	return (
		<div className="App">
			<Header />
			<Search />
			<Recipes />
			<Footer />
		</div>
	);
}

export default RecipesPage;