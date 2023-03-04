function AdressBtn() {

    let scrollingAdress = () => {

        let element = document.querySelector('.ymaps-2-1-79-map')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    return(
        <div>
            <button className='button' onClick={scrollingAdress}>Адресс</button>
        </div>
    )
}

export default AdressBtn