import ConteinerBox from '../../Component/ConteinerBox/ConteinerBox'
import ConteinerMap from '../../Component/ConteinerMap/ConteinerMap'
import ConteinerText from '../../Component/ConteinerText/ConteinerText'
import Cloud from '../../Component/Cloud/Cloud'
import cloud from './cloud.png'

function SeventhLeaf() {

    return(
        <div className="item">
            <div className='black_leaf'>
                <Cloud cloud={cloud}/>
                <ConteinerBox>
                    {[<ConteinerText key='7' name='Adress' title='Мы находимся в Идель Тауэр' text='г.Уфа, ул.Проспект Октября 107Б'/>
                    , <ConteinerMap key='7'/>]}
                </ConteinerBox>   
            </div>
        </div>
    )
}

export default SeventhLeaf