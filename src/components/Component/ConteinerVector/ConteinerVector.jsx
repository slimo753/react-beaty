
import AdressBtn from '../../UI/AdressBtn/AdressBtn'
import SocialBtn from '../../UI/SocialBtn/SocialBtn'
import { useInView } from 'react-intersection-observer'
import VectorText from '../VectorText/VectorText'
import './ConteinerVector.css'
import vector1 from './vector1.png'
import vector2 from './vector2.png'

function ConteinerVector(props) {

    const { ref, inView} = useInView({
        threshold: 0.3,
      });

    return(
        <div className='conteiner_vector'>
            <div className='conteiner_vector_string'>
                <div className={`string_conteiner left_1 ${inView ? 'active' : ''}`} ref={ref}>
                    <VectorText name='Напиши нам' title='В удобной для тебя социальной сети'><SocialBtn/></VectorText>
                </div>
                <div className={`string_conteiner right_1 ${inView ? 'active' : ''}`}>
                    <img src={vector1} alt=" " className='vector_right'/>
                </div>
            </div>
            <div className='conteiner_vector_string'>
                <div className={`string_conteiner left_2 ${inView ? 'active' : ''}`}>
                    <img src={vector2} alt=" " className='vector_left'/>
                </div>
                <div className={`string_conteiner right_2 ${inView ? 'active' : ''}`}>
                    <VectorText name='Наш менеджер' title='Подберет удобную дату и время для тебя'/>
                </div>
            </div>
            <div className='conteiner_vector_string'>
                <div className={`string_conteiner left_3 ${inView ? 'active' : ''}`}>
                    <VectorText name='Мы ждем тебя' title='По нашему адресу'><AdressBtn/></VectorText>
                </div>
                <div className='string_conteiner right_3'></div>
            </div>
         </div>  



            /* <div className='conteiner_vector_left'>
                <div className='conteiner_vector_content conteiner_vector_1'>
                    <VectorText name='Напиши нам' title='В удобной для тебя социальной сети'><SocialBtn/></VectorText>
                </div>
                <div className='conteiner_vector_vector conteiner_vector_2'>
                    <img src={vector2} alt=" " className='vector_left'/>
                </div>
                <div className='conteiner_vector_content conteiner_vector_3'>
                    <VectorText name='Мы ждем тебя' title='По нашему адресу'><AdressBtn/></VectorText>
                </div>
            </div>
            <div className='conteiner_vector_left conteiner_vector_4'>
                <div className='conteiner_vector_vector conteiner_vector_5'>
                    <img src={vector1} alt=" " className='vector_right'/>
                </div>
                <div className='conteiner_vector_content conteiner_vector_6'>
                    <VectorText name='Наш менеджер' title='Подберет удобную дату и время для тебя'/>
                </div>
                <div className='conteiner_vector_vector'></div>
            </div> */
    )
}

export default ConteinerVector