import { useInView } from 'react-intersection-observer'
import './Slide.css'

function Slide(props) {

    const { ref, inView} = useInView({
        threshold: 0.3,
      });
        
    return(
        <div className="slider_element_second">
            <div className='slide_left_right slide_left'>
                <div className='slide_content'>
                    <img src={props.img} className={`slider_img ${inView ? 'active' : ''}`} ref={ref} alt="fon1" />
                </div>
            </div>
            <div className='slide_left_right slide_right'>
                <div className='slide_content'>
                    <h2 className={`description ${inView ? 'active' : ''}`} ref={ref}>{props.description}</h2>
                    <p className={`title ${inView ? 'active' : ''}`} ref={ref}>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Slide