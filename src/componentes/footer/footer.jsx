// Para utilizar o componente crie o import na página que deseja
// coloque o nome da pessoa entre <Footer>NomePessoa</Footer>
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>ProfCastello</Footer> <= exemplo
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css"

const Footer = ({children, link}) =>{
    return(
        <footer>
            <p>
                Feito com <ion-icon name="heart" /> por{" "}
                <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
                
            </p>
                <SocialLinks icon={"logo-github"} href={"https://github.com"} />
                <SocialLinks icon={"logo-instagram"} href={"https://instagram.com"} />
                <SocialLinks icon={"logo-twitter"} href={"https:/twitter.com"} />
                <SocialLinks icon={"logo-facebook"} href={"https://facebook.com"} />
                <SocialLinks icon={"logo-linkedin"} href={"https://linkedin.com"} />
        </footer>
    )
};

export default Footer;