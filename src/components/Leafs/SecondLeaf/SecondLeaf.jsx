import ConteinerText from '../../Component/ConteinerText/ConteinerText'
import ConteinerImg from '../../Component/ConteinerImg/ConteinerImg'
import ConteinerBox from '../../Component/ConteinerBox/ConteinerBox'
import Cloud from '../../Component/Cloud/Cloud'
import cloud from './cloud.png'
import fon from './fon.jpg'

function SecondLeaf() {

    return(
        <div className='item'>
            <div className='black_leaf second_leaf'>
                <Cloud cloud={cloud}/>
                <ConteinerBox>
                    {[<ConteinerImg key='2' img={fon}/>,<ConteinerText key='2' name='beaty.lab' title='Студия наращивания ресниц' text='Наращивание и ламинирование ресниц, а также комплексное оформление бровей'/>]}
                </ConteinerBox>
            </div>
        </div>
    )
}

export default SecondLeaf