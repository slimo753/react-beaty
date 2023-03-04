import Down from '../../UI/Down/Down'
import Logo from '../../UI/Logo/Logo'
import FirstLeafCarousel from '../../Component/FirstLeafCarousel/FirstLeafCarousel'

function FirstLeaf() {

    return(
        <div className="item">
            <FirstLeafCarousel/>
            <Logo/>
            <Down/>
        </div>
    )
}

export default FirstLeaf