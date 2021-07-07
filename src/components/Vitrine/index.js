import './styles.css'
import offerFlag from '../../assets/offer-flag.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import starIcon from '../../assets/star-icon.png'
import staredIcon from '../../assets/stared-icon.png'

function Vitrine() {

    
    return (
        <div className='vitrine'>
            <h2>Mais Vendidos</h2>
            <div className='line'/>

            <div className='content'>
                <img alt='' src={leftArrow} className='left-arrow' />
                <Product />
                <Product />
                <Product />
                <Product />
                <img alt='' src={rightArrow} className='right-arrow' />
            </div>

        </div>

    )
}

function Product() {
    return (
        <div className='product-content'>
            <div className='img-content'>
                <img alt='produto' src='https://corebiz-test.herokuapp.com/images/product-1.png' className='product-img' />
                <img alt='produto' src={offerFlag} className='product-flag'/>
            </div>
            <div className='product-info'>
                <p id='product-name'>PRODUTO</p>
                <div>
                    <img alt='' src={staredIcon}/>
                    <img alt='' src={starIcon}/>
                    <img alt='' src={starIcon}/>
                    <img alt='' src={starIcon}/>
                    <img alt='' src={starIcon}/>
                </div>
                <p id='product-price'>por R$ 259,90</p>
                <p id='product-parcelation'>ou em 9x de R$28,87</p>
                <button className='buy-button'>COMPRAR</button>
            </div>
        </div>
    )

}

export default Vitrine