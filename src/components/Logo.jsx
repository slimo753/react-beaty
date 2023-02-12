import logo from './elements/logo.png'
import '../styles/Logo.css'

function Logo() {

    return(
        <div>
            <img src={logo} className="logo element-animation" alt="beauty.lab"/>
        </div>
    )
}

export default Logo