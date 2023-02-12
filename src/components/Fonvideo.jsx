import fonvideo1 from './elements/fonvideo1.mp4'
import '../styles/Fonvideo.css'


function Fonvideo() {

    return(
        <div>
            <video className="video" src={fonvideo1} type="video/mp4" muted autoPlay loop playsInline></video>
        </div>
    )
}

export default Fonvideo