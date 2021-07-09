import './styles.css'
import bannerImg from '../../assets/banner-img.png'

function Banner(){
    return(
        <div className='banner-content'>
            <div className='banner-background'>
            <div className='banner-text'>
                <h3>Olá, o que você está buscando?</h3>
                <h2>Criar ou migrar seu e-commerce?</h2>
                </div>
                
            </div>
            <img alt='banner' src={bannerImg} className='banner-img'/>
        </div>
    )
}

export default Banner