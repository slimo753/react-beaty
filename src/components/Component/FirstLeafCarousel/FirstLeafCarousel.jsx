import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import FirstLeafSlide from '../FirstLeafSlide/FirstLeafSlide'
import './FirstLeafCarousel.css'
import fonvideo1 from './fonvideo1.mp4'
import fonvideo2 from './fonvideo2.mp4'
import fonvideo3 from './fonvideo3.mp4'

function FirstLeafCarousel() {

    const [slideList] = useState([
        {id:1, name:'beaty.lab', title: 'твоя студия ресниц', video:fonvideo1},
        {id:2, name:'quality', title: 'только качественные услуги', video:fonvideo2},
        {id:3, name:'available', title: 'красота теперь доступна', video:fonvideo3},
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
            <div className='conteiner_slider_first'>
                <div className='window_first'>
                    <div style={allSlides}>
                        {slideList.map((slide) => <FirstLeafSlide key={slide.id} name={slide.name} title={slide.title} video={slide.video}/>)}
                    </div>
                </div>
            </div>
            <FaChevronLeft className='fachevron_left_first' onClick={leftClick}/>
            <FaChevronRight className='fachevron_right_first' onClick={rightClick}/>
        </div>
    )
}

export default FirstLeafCarousel