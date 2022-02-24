import '../styles/components/pages/ContactoPage.css';


import React, { useState } from 'react';
import axios from 'axios';



const ContactoPage = (props) => {
	

	const initialForm = {
		nombre: '',
		email: '',
		telefono: '',
		mensaje: ''
	}

	const [sending, setSending] = useState(false);
	const [msg, setMsg] = useState ('');
	const [formData, setFormData] = useState(initialForm);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(oldData => ({
			...oldData,
			[name]: value //forma dinamica
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setMsg('');
		setSending(true)
		const response = await axios.post('http://localhost:3000/api/contacto', formData);
		setSending(false);
		setMsg(response.data.message);
		if (response.data.error === false) {
			setFormData(initialForm)
		}

	}



	return (
<main className="holder">
	
	<div className="container">
		<img src="https://via.placeholder.com/1044x250" width="100%" />
		<div className="content">
    	<h1>EC Logistics</h1>
    	<p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p> 
  		</div>
  	</div>	
	
	<div className="row">
		<div className="reachus right">
			<h2>Reach us</h2>
			<p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
			<p><i className="fas fa-map-marker-alt icono"></i>address...zipcode</p>
			<p><i className="fas fa-phone-alt icono"></i>(###) ###-####</p>
			<p><a href="mailto:mimail@gmail.com"><i className="fas fa-envelope-open-text icono"></i>mail...@....com</a></p>
		</div>
	</div>	

	<div className="form left">
			<h2>Leave us a message</h2>
				<form method="post" className="formulario" onSubmit={handleSubmit} >
  				
  				<p>
  					<label for="nombre" class="form-label">Nombre</label>
  					<input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
  				</p>
  				<p>
  						<label for="email" class="form-label">Email</label>
  						<input type="text" name="email" value={formData.email} onChange={handleChange}/>
				</p>
				<p>
  						<label for="mensaje">Text</label>
  						<textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
				</p>

				{sending ? <p>On the way...</p> :null}
				{msg ? <p>{msg}</p> :null}
				<p className="centrar"><input type="submit" value="Send" /></p>

				</form>

	</div>


</main>

	);
}

export default ContactoPage;