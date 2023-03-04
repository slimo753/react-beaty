import ConteinerBox from '../../Component/ConteinerBox/ConteinerBox'
import ConteinerImg from '../../Component/ConteinerImg/ConteinerImg'
import ConteinerText from '../../Component/ConteinerText/ConteinerText'
import Cloud from '../../Component/Cloud/Cloud'
import cloud from './cloud.png'
import fon from './fon.jpg'

function ThirdLeaf() {

    return(
        <div className="item">
            <div className='black_leaf'>
                <Cloud cloud={cloud}/>
                <ConteinerBox>
                    {[<ConteinerText key='3' name='Service' title='Комфортные услуги' text='У нас созданы все условия для комортного проведения процедуры наращивания ресниц'/>, <ConteinerImg key='3' img={fon}/>]}
                </ConteinerBox>   
            </div>
        </div>
    )
}

export default ThirdLeaf