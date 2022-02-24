import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
	return (

		<nav>
		<div className="holder">
		<ul>
			<li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
			<li><NavLink to="/about" activeClassName="selected">About us</NavLink></li>
			<li><NavLink to="/services" activeClassName="selected">Noticias</NavLink></li>
			<li><NavLink to="/contact" activeClassName="selected">Contact us</NavLink></li>
		</ul>
		</div> 
		</nav>
	);
}

export default Nav;