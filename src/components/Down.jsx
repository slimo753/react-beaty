import down from './elements/down.png'
import '../styles/Down.css'

function Down() {

    return(
        <div>
            <div className="conteiner_down">
                <p>Подробнее о студии</p>
                <img src={down} className="down" alt="Вниз"/>
            </div>
        </div>
    )
}

export default Down