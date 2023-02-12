import '../styles/ContentConteiner.css'
import Down from './Down'
import Effects from './Effects'

function ContentConteiner(props) {

    return(
        <div className="item">
            <Effects/>
            <div className="content_conteiner element-animation">
                <div className="content_name element-animation">{props.name}</div>
                <div className="content_title element-animation">{props.title}</div>
                <div className="content_contents element-animation">{props.contents}</div>
                <div className="conteiner_social"></div>
            </div>
            <Down/>
        </div>
    )
}

export default ContentConteiner