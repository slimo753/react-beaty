
import './ConteinerBox.css'

function ConteinerBox(props) {

    return(
        <div className='conteiner_box_contenr'>
            <div className='left_right'>
                {props.children[0]}
            </div>
            <div className='left_right'>
                {props.children[1]}
            </div>
        </div>             
    )
}

export default ConteinerBox