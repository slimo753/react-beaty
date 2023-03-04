import { useEffect, useState } from 'react'
import './MenuBtn.css'
import menu from'./menu-white.png'

function MenuBtn() {

    const [stateMenu, setMenu] = useState('normal')

    const openMenu = () => {

        setMenu((curentState) => {

            if (curentState === 'active') {
                return curentState = 'normal'
            }

            if (curentState === 'normal') {
                return curentState = 'active'
            }
        })
    }

    useEffect(() => {

        if (stateMenu === 'active') {

            let element = document.querySelector('.menu_container')
            element.classList.add('active')          
        }

        else {

            let element = document.querySelector('.menu_container')
            element.classList.remove('active')
        }

    }, [stateMenu])

    return(
        <div>
            <img className='menu' src={menu} alt="menu" onClick={openMenu}/>
        </div>
    )
}

export default MenuBtn 