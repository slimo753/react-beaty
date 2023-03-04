import cloud from './cloud.png'
import SecondLeafCarousel from '../../Component/SecondLeafCarousel/SecondLeafCarousel'
import Cloud from '../../Component/Cloud/Cloud'

function FiveLeaf() {

    return(
        <div className="item">
            <div className='black_leaf'>
                <Cloud cloud={cloud}/>
                <SecondLeafCarousel cloud={cloud}/>
            </div>
        </div>
    )
}

export default FiveLeaf