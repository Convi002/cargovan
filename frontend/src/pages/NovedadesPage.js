import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/layout/NovedadItem';

const NovedadesPage = (props) => {
	
	const [loading, setLoading] = useState(false);
	const [novedades, setNovedades] = useState([]);

	useEffect(() => {
		const cargaNovedades = async () => {
			setLoading(true);
			const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades');
			setNovedades(response.data);
			setLoading(false);	
		};

		cargaNovedades();	
	}, []);


	return (
		<main className="holder">
			<h2>Noticias - News</h2>
			{loading ? (
				<p>Cargando...</p>
			) : (
				novedades.map(item => <NovedadItem key={item.id}
					title={item.titulo} subtitle={item.subtitulo}
					imagen={item.imagen} body={item.cuerpo} />)
	)}
	</main>
	);
}
		
	

export default NovedadesPage;
