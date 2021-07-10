import PropTypes from 'prop-types'

function NewsletterForm(props) {
    return (
        <div>
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <div className='newsletter-form'>
                <form onSubmit={props.handleValidation}>
                    <div>
                        <input className={props.nameValided ? '' : 'input-wrong'} placeholder='Digite seu nome' value={props.name} onChange={(e) => props.setName(e.target.value)} />
                        {props.nameValided ? '' : <p className='invalid-input'>Digite um nome válido</p>}
                    </div>
                    <div>
                        <input className={props.emailValided ? '' : 'input-wrong'} placeholder='Digite seu email' value={props.email} onChange={(e) => props.setEmail(e.target.value)}></input>
                        {props.emailValided ? '' : <p className='invalid-input'>Digite um email válido</p>}
                    </div>
                    <div>
                        <button type='submit'>Eu quero!</button></div>
                </form>
            </div>
        </div>
    )
}

NewsletterForm.propTypes = {
    handleValidation: PropTypes.func,
    nameValided: PropTypes.bool,
    emailValided: PropTypes.bool,
    name: PropTypes.string,
    email: PropTypes.string,
    setName: PropTypes.func,
    setEmail: PropTypes.func
}
export default NewsletterForm