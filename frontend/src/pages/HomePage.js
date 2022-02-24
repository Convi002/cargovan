import '../styles/components/pages/HomePage.css';

import React from 'react';
const HomePage = (props) => {
	return (
<main class="holder">
	<div class="homeimg">
		<img src="https://via.placeholder.com/1044x250" width="100%"/>
	
	</div>

	<div class="row">
		<div class="welcome left">
			<h2>Why EC Logistics?</h2>
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
		</div>	

	<div class="servicesview right">
		<h2>Express delivery services include:</h2>
		
		<a href="#"><div class="column">
			
			
			<h3>At vero eos et</h3>
			<p>At vero</p>
		</div></a>
		
		<a href="#"><div class="column1">
	
			
			<h3>At vero eos et</h3>
			<p>At vero</p>
		</div></a>

		<a href="#"><div class="column1">

			
			<h3>At vero eos et</h3>
			<p>At vero</p>
		</div></a>

		<a href="#"><div class="column1">

			
			<h3>At vero eos et</h3>
			<p>At vero</p>
		</div></a>	
		</div>
	</div>
</main>

	);
}

export default HomePage;