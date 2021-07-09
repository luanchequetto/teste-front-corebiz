import axios from 'axios'
import { useState } from 'react'
import './styles.css'

function Newsletter() {
    const nameRegex = /[a-zA-Z]+/g
    const emailRegex = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nameValided, setNameValided] = useState(true)
    const [emailValided, setEmailValided] = useState(true)
    const [submited, setSubmited] = useState(false)

    function handleValidation(e) {

        e.preventDefault();
        const validName = nameRegex.test(name)
        const validEmail = emailRegex.test(email)
        if (validName && validEmail) {
            axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', { email, name })
                .then((res) => {
                    setSubmited(true)
                    setName('')
                    setEmail('')
                    console.log(res)
                })
                .catch((err) => alert('Houve um erro ao cadastrar, tente novamente\n' + err))
        } else {
            setSubmited(false)
        }
        setNameValided(validName)
        setEmailValided(validEmail)
        console.log('sub' + submited)
    }
    return (
        <div className='newsletter'>
            {submited ? <NewsletterSubmited setSubmited={setSubmited} /> :
                <NewsletterForm
                    handleValidation={handleValidation}
                    nameValided={nameValided}
                    emailValided={emailValided}
                    name={name}
                    email={email}
                    setName={setName}
                    setEmail={setEmail}
                />}
        </div>
    )
}

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

function NewsletterSubmited(props) {
    return (
        <div className='newsletter-submited'>
            <h3> Seu e-mail foi cadastrado com sucesso!</h3>
            <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
            <button onClick={() => props.setSubmited(false)}>Cadastrar novo e-mail</button>
        </div>
    )
}

export default Newsletter