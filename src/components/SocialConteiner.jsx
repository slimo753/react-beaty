import '../styles/ContentConteiner.css'
import Effects from './Effects'
import instagram from './elements/instagram-white.png'
import telegram from './elements/telegram-white.png'
import whatsapp from './elements/whatsapp-white.png'
import '../styles/SocialConteiner.css'
import SocialElement from './SocialElement'
import Down from './Down'

function SocialConteiner(props) {

    return(
        <div className="item">
            <Effects/>
            <div className="content_conteiner element-animation">
                <div className="content_name element-animation">{props.name}</div>
                <div className="content_title element-animation">{props.title}</div>
                <div className="content_contents element-animation">{props.contents}</div>
                <div className="conteiner_social">
                    <SocialElement href='https://instagram.com/beauty.lab.ufa?igshid=YmMyMTA2M2Y="' img={instagram} social='instagram'/>
                    <SocialElement href='https://t.me/anstrieltor' img={telegram} social='telegram'/>
                    <SocialElement href='https://wa.me/79196131804' img={whatsapp} social='whatsapp'/>
                </div>
            </div>
            <Down/>
        </div>
    )
}

export default SocialConteiner