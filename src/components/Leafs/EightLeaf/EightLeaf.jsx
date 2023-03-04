import ComponentSocial from '../../Component/ComponentSocial/ComponentSocial'
import cloud from './cloud.png'
import Cloud from '../../Component/Cloud/Cloud'
import './EightLeaf.css'
import instagram from './instagram-white.png'
import telegram from './telegram-white.png'
import whatsapp from './whatsapp-white.png'


function EightLeaf() {

    return(
        <div className="item">
            <div className='black_leaf'>
                <Cloud cloud={cloud}/>
                <div className='conteiner_social'>
                    <div className='coneiner_content_social'>
                        <ComponentSocial img={instagram} name='instagram' href='https://instagram.com/beauty.lab.ufa?igshid=YmMyMTA2M2Y="'/>
                    </div>
                    <div className='coneiner_content_social'>
                        <ComponentSocial img={telegram} name='telegram' href='https://t.me/anstrieltor'/>
                    </div>
                    <div className='coneiner_content_social'>
                        <ComponentSocial img={whatsapp} name='whatsapp' href='https://wa.me/79196131804'/>
                    </div>
                </div>
                <div className='conteiner_meta'>      
                    <div className="meta">Meta Platforms (а также принадлежащие ей Facebook и Instagram) признана экстремистской организацией, её деятельность в России запрещена.</div> 
                </div>         
            </div>
        </div>
    )
}

export default EightLeaf