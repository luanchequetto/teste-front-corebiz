import axios from 'axios'
import { useState } from 'react'
import NewsletterForm from '../NewsletterForm'
import NewsletterSubmited from '../NewsletterSubmited'
import './styles.css'
import { emailRegex, nameRegex } from '../../utils/regex.js'

function Newsletter() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nameValided, setNameValided] = useState(true)
    const [emailValided, setEmailValided] = useState(true)
    const [submited, setSubmited] = useState(false)

    async function handleValidation(e) {
        e.preventDefault();
        const validName = nameRegex.test(name)
        const validEmail = emailRegex.test(email)
        if (validName && validEmail) {
            try {
                await axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', { email, name })
                localStorage.setItem('userInfos', JSON.stringify({name, email}))
                setSubmited(true)
                setName('')
                setEmail('')
            }
            catch {
                alert('Houve um erro ao cadastrar, tente novamente')

            }
        } else {
            setSubmited(false)
        }
        setNameValided(validName)
        setEmailValided(validEmail)
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

export default Newsletter
