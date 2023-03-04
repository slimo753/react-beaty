import './FirstLeafSlide.css'
import { useInView } from 'react-intersection-observer'
import Effects from './../../UI/Effects/Effects'

function FirstLeafSlide(props) {

    const { ref, inView} = useInView({
        threshold: 0.3,
      });

    return(

        <div className="slider_element_first">
            <Effects/>
            <video className="video" src={props.video} type="video/mp4" muted autoPlay loop playsInline></video>
            <div className='content_conteiner_first'>
                <div className={`slide_title_first ${inView ? 'active' : ''}`} ref={ref}>{props.title}</div>
                <div className={`slide_name_first ${inView ? 'active' : ''}`} ref={ref}>{props.name}</div>
            </div>
        </div>                 
    )
}

export default FirstLeafSlide