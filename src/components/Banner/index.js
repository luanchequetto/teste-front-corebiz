import './styles.css'
import bannerBackground from '../../assets/banner-bg.png'
import bannerImg from '../../assets/banner-img.png'

function Banner(){
    return(
        <div className='banner-content'>
            <div className='banner-background'></div>
            <img alt='banner-image' src={bannerImg} className='banner-img'/>
        </div>
    )
}

export default Banner