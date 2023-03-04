import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './SecondLeafCarousel.css'
import fon1 from './fon1.jpg'
import fon2 from './fon2.jpg'
import fon3 from './fon3.jpg'
import Slide from '../Slide/Slide'

function Carousel(props) {

    const [slideList] = useState([
        {id:1, description:'Building', title: 'Наращивание любой формы, наши мастера подберут форму бровей, походящую именно Вам', img:fon1},
        {id:2, description:'Lamination', title: 'Ламинирование ресниц, удлинение и утолщение волосков, для более естесвенного взгляда', img:fon2},
        {id:3, description:'Removal', title: 'Снятие ресниц щадящим составом, который не вызывает раздрожение граз', img:fon3},
    ])

    const slideWidth = 100 / slideList.length

    const[offset, setOffset] = useState(0)

    let allSlides = {

        height: '100%',
        width: `${slideList.length * 100}%`,
        display: 'flex',
        flexDirection: 'row',
        transform: `translateX(${offset}%)`
        
    }

    const leftClick = () => {

        setOffset((current) => {

            let newOffset = current - slideWidth

            if (newOffset < (100 - slideWidth) * -1) {
                newOffset = (100 - slideWidth) * -1
                return newOffset
            }

            else {
                return newOffset
            }
        })
    }

    const rightClick = () => {

        setOffset((current) => {

            let newOffset = current + slideWidth

            if (newOffset > 0) {
                newOffset = 0
                return newOffset
            }

            else {
                return newOffset
            }
        })
    }

    return(
        <div>
            <div className='conteiner_slider_second'>
                <FaChevronLeft className='fachevron_second' onClick={leftClick}/>
                <div className='window_second'>
                    <div style={allSlides}>
                        {slideList.map((slide) => <Slide key={slide.id} description={slide.description} title={slide.title} img={slide.img}/>)}
                    </div>
                </div>
                <FaChevronRight className='fachevron_second' onClick={rightClick}/>
            </div>
        </div>
    )
}

export default Carousel