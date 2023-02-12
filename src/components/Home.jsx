import React from 'react'
import Inscription from './Inscription'
import Logo from './Logo'
import Footer from './Footer'
import ContentConteiner from './ContentConteiner'
import Fonvideo from './Fonvideo'
import SocialConteiner from './SocialConteiner'

function Home() {

    React.useEffect(function(){
        function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                change.target.classList.add('active');
              }
            });
          }
        
          let options = { threshold: [0.5] };
          let observer = new IntersectionObserver(onEntry, options);
          let elements = document.querySelectorAll('.element-animation');
          for (let elm of elements) {
            observer.observe(elm);
          }
    })

    return(
        <div>
            <header>
                <Inscription/>
            </header>
            <Fonvideo/>
            <div className='box'>
                <div>
                    <Logo/>
                    <ContentConteiner name='beauty.lab' title='your favorite studio'/>
                </div>
                <div>
                    <ContentConteiner name='services' title='наши услуги' contents='У нас можно сделать ламинирование и наращивание ресниц, различных объемов и эффектов'/>
                </div>
                <div>
                    <ContentConteiner name='adress' title='как найти нас' contents='📍остановка театр кукол.   
                            Проспект Октября 107Б  Доходите до вывески « 4 сезона» , там будет домафон, нажимаете просто цифру 1 и ждёте гудков, 
                            я открою домафонную дверь, далее поднимитесь по лестнице и идёте прямо по коридору, я вас встречу там уже 😊'/>
                </div>
                <div>
                    <SocialConteiner name='contacts' title='наши контакты'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home