import './styles.css'
import mailIcon from '../../assets/mail-icon.png'
import contactIcon from '../../assets/contact-icon.png'
import corebizLogo from '../../assets/footer-corebiz-logo.png'
import vtexLogo from '../../assets/footer-vtex-logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='localization-div'>
                    <h2>Localização</h2>
                    <div className='line' />
                    <p>Avenida Andrômeda, 2000, Bloco 6 e 8</p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </div>
                <div className='contact-div'>
                    <button><img alt='' src={mailIcon} />ENTRE EM CONTATO</button>
                    <button><img alt='' src={contactIcon} />FALE COM O NOSSO CONSULTOR ONLINE </button>
                </div>
                <div className='logos-footer'>
                    <div className='corebiz-logo'>
                        <p>Created by</p>
                        <img alt='corebiz-logo' src={corebizLogo} />
                    </div>
                    <div className='vtex-logo'>
                        <p>Powered by</p>
                        <img alt='vtex-logo' src={vtexLogo} />

                    </div>
                </div>
            </div>
            <div className='footer-info'>
                <p>Essa landing page foi desenvolvida durante o programa de treinamento Hiring Coders #2,
                    suas informações, valores citados e dados são apenas para fins estudantis.
                </p>
            </div>
        </div>
    )
}

export default Footer