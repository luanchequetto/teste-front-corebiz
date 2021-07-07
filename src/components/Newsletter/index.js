import './styles.css'

function Newsletter(){
    return(
        <div className='newsletter'>
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <div className='newsletter-form'>
                <input placeholder='Digite seu nome'></input>
                <input placeholder='Digite seu email'></input>
                <button>Eu quero!</button>
            </div>
        </div>
    )
}

export default Newsletter