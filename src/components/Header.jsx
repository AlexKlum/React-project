import React from "react";
import { NavLink } from 'react-router-dom';

import "./Header.css";

function Header() {
	return (
		<section className="header">
			<section className="headerLogo">
				<img
					id="cucumberLogo"
					src="https://www.everfresh.se/globalassets/bilder-gronsaker/ovr_gronsaker/h2_gurka.png"
					alt="cucumber"
					srcSet=""
				/>
			</section>

			<section className="headerNavbar">
			<ul className="navLinks">
				<li>
					{ <h2><NavLink to="./">Hem</NavLink></h2> }
				</li>
				<li>
					{ <h2><NavLink to="./recipes">Recept</NavLink></h2> }
				</li>
			</ul>
			</section>

		</section>
	);
}
export default Header;
