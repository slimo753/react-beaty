import { useInView } from 'react-intersection-observer'
import logo from './logo.png'
import './Logo.css'

function Logo() {

    const { ref, inView} = useInView({
        threshold: 0.5,
      });
      
    return(
        <div>
            <img src={logo} className={`logo ${inView ? 'active' : ''}`} ref={ref} alt="beauty.lab"/>
        </div>
    )
}

export default Logo