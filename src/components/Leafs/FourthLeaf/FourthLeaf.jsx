import ConteinerBox from '../../Component/ConteinerBox/ConteinerBox'
import ConteinerImg from '../../Component/ConteinerImg/ConteinerImg'
import ConteinerText from '../../Component/ConteinerText/ConteinerText'
import Cloud from '../../Component/Cloud/Cloud'
import cloud from './cloud.png'
import fon from './fon.jpeg'

function ForthLeaf() {

    return(
        <div className="item">
            <div className='black_leaf'>
                <Cloud cloud={cloud}/>
                <ConteinerBox>
                    {[<ConteinerImg key='4' img={fon}/>,<ConteinerText key='4' name='Quality' title='Только качественные материалы' text='В работе используем только качественные и сертифицированные материалы премиум-класса и класса-люкс'/>]}  
                </ConteinerBox>   
            </div>
        </div>
    )
}

export default ForthLeaf