import './styles.css'

function Newsletter(){
    return(
        <div className='newsletter'>
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <div className='newsletter-form'>
                <form>
                <input placeholder='Digite seu nome'></input>
                <input placeholder='Digite seu email'></input>
                <button type='submit'>Eu quero!</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter