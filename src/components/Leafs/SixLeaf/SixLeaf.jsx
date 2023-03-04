import cloud from './cloud.png'
import Cloud from '../../Component/Cloud/Cloud'
import ConteinerVector from '../../Component/ConteinerVector/ConteinerVector'

function SixLeaf() {

    return(
        <div className="item">
            <div className='black_leaf'>
                <Cloud cloud={cloud}/>
                <ConteinerVector/>
            </div>
        </div>
    )
}

export default SixLeaf