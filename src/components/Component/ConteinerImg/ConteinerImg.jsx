import { useInView } from 'react-intersection-observer'
import './ConteinerImg.css'

function ConteinerImg(props) {

    const { ref, inView} = useInView({
        threshold: 0.3,
      });

    return(
        <div className='conteiner_img'>
            <img className={`conteiner_img_img ${inView ? 'active' : ''}`} src={props.img} alt='img' ref={ref}/>
        </div>
    )
}

export default ConteinerImg