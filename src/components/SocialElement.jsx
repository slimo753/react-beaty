import '../styles/SocialElement.css'

function SocialElement(props) {

    return(
         <a className="content_social element-animation" href={props.href}><img src={props.img} className="social_png" alt={props.social}/>{props.social}</a>
    )
}

export default SocialElement