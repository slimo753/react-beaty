import React from 'react'
import Footer from '../../Component/Footer/Footer'
import FirstLeaf from '../../Leafs/FirstLeaf/FirstLeaf'
import SecondLeaf from '../../Leafs/SecondLeaf/SecondLeaf'
import ThirdLeaf from '../../Leafs/ThirdLeaf/ThirdLeaf'
import FourthLeaf from '../../Leafs/FourthLeaf/FourthLeaf'
import Header from '../../Leafs/Header/Header'
import Menu from '../../Component/Menu/Menu'
import MenuBtn from '../../UI/MenuBtn/MenuBtn'
import SeventhLeaf from '../../Leafs/SeventhLeaf/SeventhLeaf'
import FiveLeaf from '../../Leafs/FiveLeaf/FiveLeaf'
import SixLeaf from '../../Leafs/SixLeaf/SixLeaf'
import EightLeaf from '../../Leafs/EightLeaf/EightLeaf'
import Down from '../../UI/Down/Down'

function Home() {

    return(
        <div>
            <header>
                <Header/>
                <Menu/>
                <MenuBtn/>
            </header>
            <div className='box'>
                <FirstLeaf/>
                <SecondLeaf/>
                <ThirdLeaf/>
                <FourthLeaf/>
                <FiveLeaf/>
                <SixLeaf/>
                <SeventhLeaf/>
                <EightLeaf/>
                <Footer/>
                <Down/>
            </div>
        </div>
    )
}

export default Home