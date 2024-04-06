import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";


import "./App.css";

function CategoryPage() {
	return (
		<div className="App">
			<Header />
			<Search />
			<Footer />
		</div>
	);
}

export default CategoryPage;