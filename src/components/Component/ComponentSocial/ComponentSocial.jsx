import './ComponentSocial.css'

function ComponentSocial(props) {

    return(
        <div className="component_social">
            <div className='component_social_conteiner_img'>
                <a href={props.href}><img src={props.img} alt=" " className='social_img'/></a>
            </div>
            <div className='component_social_conteiner_content'>
                <a href={props.href}>{props.name}</a>
            </div>
        </div>
    )
}

export default ComponentSocial