import './VectorText.css'

function VectorText(props) {

    return(
        <div className='vector_text'>
            <div className='vector_name'>{props.name}</div>
            <div className='vector_title'>{props.title}</div>
            <div>{props.children}</div>
        </div>             
    )
}

export default VectorText