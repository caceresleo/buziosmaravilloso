import '../../stylesheets/Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

	return(
        <footer className="footer">

                       <a href="https://instagram.com/buziosmaravilloso?igshid=YmMyMTA2M2Y=" ><InstagramIcon sx={{ color: "#fff" }} /></a>
                       <a href="https://www.facebook.com/buzioshospedaje"><FacebookIcon sx={{ color: "#fff" }} /></a>           
        </footer>
		)
}

export default Footer;