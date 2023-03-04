function SocialBtn() {

    let scrollingSocial = () => {

        let element = document.querySelector('.ymaps-2-1-79-map')
        element.scrollIntoView({block: "end", inline: "nearest"})
    }

    return(
        <div>
            <button className='button' onClick={scrollingSocial}>Контакты</button>
        </div>
    )
}

export default SocialBtn