import PropTypes from 'prop-types'

function NewsletterSubmited(props) {
    return (
        <div className='newsletter-submited'>
            <h3> Seu e-mail foi cadastrado com sucesso!</h3>
            <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
            <button onClick={() => props.setSubmited(false)}>Cadastrar novo e-mail</button>
        </div>
    )
}

NewsletterSubmited.propTypes = {
    setSubmited: PropTypes.func
}
export default NewsletterSubmited