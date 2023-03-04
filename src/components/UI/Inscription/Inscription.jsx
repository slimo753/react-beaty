import inscription from './inscription.png'
import './Inscription.css'


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