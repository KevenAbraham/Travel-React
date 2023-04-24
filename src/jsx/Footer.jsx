import style from '../css/Footer.module.css';
import Insta from '../img/insta.jfif';
import TikTok from '../img/tiktok.png';
import Face from '../img/face.jfif';
import Whats from '../img/whtas.png';

function Footer() {
    return (
        <footer>
            <p>Siga-nos em nossas redes sociais</p>
            <div className={style.redes}>
                <img src={Insta} alt="Instagram" />
                <img src={Face} alt="Facebook" />
                <img src={TikTok} alt="TikTok" />
                <img src={Whats} alt="WhatsApp" />
            </div>
            <p>Telefone de contato: (11) 9555 - 3355</p>
        </footer>
    )
}

export default Footer;