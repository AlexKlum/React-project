import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Recipes from "./pages/Recipes.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Category.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StarRating from "./components/StarRating.jsx";
import TestMenu from "./components/TestMenu.jsx";


import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="TestMenu" element={<TestMenu />} />
            <Route path="recipes" element={<Recipes />} />
			   <Route path="category/:type" element={<Categories />} />
         </Routes>
			<Footer />
		</div>
	);
}
// product/:productId
export default App;