import { useInView } from 'react-intersection-observer'
import './ConteinerText.css'

function ConteinerText(props) {

    const { ref, inView} = useInView({
        threshold: 0.3,
      });

    return( 
        <div className='conteiner_text_content'>
            <div className={`conteiner_text_name ${inView ? 'active' : ''}`} ref ={ref}>{props.name}</div>
            <div className={`conteiner_text_title ${inView ? 'active' : ''}`} ref={ref}>{props.title}</div>
            <div className={`conteiner_text_text ${inView ? 'active' : ''}`} ref={ref}>{props.text}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default ConteinerText