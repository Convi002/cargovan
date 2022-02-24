import { Link } from "react-router-dom";
import '../../styles/components/layout/Header.css'

import React from 'react';
const Header = (props) => {
	return (
	<header>	
		<div>
		<img src="images/logo.png" width="150" alt="ECLogistics" />
	<h1>EC Logistics</h1>
	<h2><a href="tel: +##########"><i className="fas fa-phone-alt iconotop"></i>call us (###) ###-####</a></h2>
		</div>
	</header>	
	);
}

export default Header;