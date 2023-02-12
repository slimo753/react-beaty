import inscription from './elements/inscription.png'
import '../styles/Inscription.css'


function Inscription() {

    return(
        <div>
            <div className ="conteiner_inscription">
                <img src={inscription} className="inscription" alt="beauty.lab"/>
                <p>| студия ресниц</p>
            </div>
        </div>
    )
}

export default Inscription