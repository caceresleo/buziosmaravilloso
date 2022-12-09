import '../../stylesheets/Actividades.css';
import '../../stylesheets/Kayak.css';


import kayak1 from "../../imagenes/actividades/kayak1.jpg";
import kayak2 from "../../imagenes/actividades/kayak2.jpg";
import kayak3 from "../../imagenes/actividades/kayak3.jpg";



const Kayak = () => {
	return (
		<section className="seccionActividades container">
					<h1> Kayak </h1>

			<article>
				<img className="imgKayak1" src={kayak1} alt="kayak1" />
				<p>Además surf, kitesurf, stand up. <br/> La variedad de playas permite que estas actividades se puedan realizar y disfrutar, 
				nosotros te asesoramos para que sepas donde encontrarlas y la manera en la que podrás llegar. <br/>
				Sin dudas disfrutaras la experiencia.</p>
				<img className="imgKayak2" src={kayak2} alt="kayak2" />
				<img className="imgKayak3" src={kayak3} alt="kayak3" />

				<div className="final"></div>

			</article>
		</section>
		)
}

export default Kayak;

