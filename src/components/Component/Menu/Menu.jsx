import './Menu.css'

function Menu() {

    let scrollingHome = () => {

        let element = document.querySelector('.logo')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    let scrollingAbout = () => {

        let element = document.querySelector('.second_leaf')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    let scrollingService = () => {

        let element = document.querySelector('.conteiner_slider_second')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    let scrollingAdress = () => {

        let element = document.querySelector('.ymaps-2-1-79-map')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    let scrollingContacts= () => {

        let element = document.querySelector('.conteiner_social')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    return(

        <div className='menu_container'>
            <ul>
                <li onClick={scrollingHome}>Ноme</li>
                <li onClick={scrollingAbout}>About</li>
                <li onClick={scrollingService}>Service</li>
                <li onClick={scrollingAdress}>Adress</li>
                <li onClick={scrollingContacts}>Contacts</li>
            </ul>
        </div>
    )
}

export default Menu