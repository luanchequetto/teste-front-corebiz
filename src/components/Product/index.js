import offerFlag from '../../assets/offer-flag.png'
import starIcon from '../../assets/star-icon.png'
import staredIcon from '../../assets/stared-icon.png'
import PropTypes from 'prop-types';


function Product(props) {

    function stringfyNumberAndReplaceDot(value) {
        let result = (value / 100).toFixed(2).toString().replace('.', ',')
        return result
    }

    return (
        <div className='product-content'>
            <div className='img-content'>
                <img alt='produto' src={props.item.imageUrl} className='product-img' />
                <img alt='produto' src={offerFlag} className={props.item.listPrice !== null ? 'product-flag' : 'product-flag-none'}/>
            </div>
            <div className='product-info'>
                <p id='product-name'>{props.item.productName}</p>
                <div>
                    <img alt='' src={props.item.stars >= 1 ? staredIcon : starIcon} />
                    <img alt='' src={props.item.stars >= 2 ? staredIcon : starIcon} />
                    <img alt='' src={props.item.stars >= 3 ? staredIcon : starIcon} />
                    <img alt='' src={props.item.stars >= 4 ? staredIcon : starIcon} />
                    <img alt='' src={props.item.stars >= 5 ? staredIcon : starIcon} />
                </div>
                {props.item.listPrice !== null ? <p id='product-listPrice'>de R$ {stringfyNumberAndReplaceDot(props.item.listPrice)}</p>
                    : <p id='product-listPrice'></p>}


                <p id='product-price'>por R$ {stringfyNumberAndReplaceDot(props.item.price)}</p>

                {props.item.installments[0] !== undefined ?
                    <p id='product-parcelation'>ou em {props.item.installments[0].quantity}x de R${stringfyNumberAndReplaceDot(props.item.installments[0].value)}</p>
                    : <p id='product-parcelation'></p>}


                <button className='buy-button' onClick={props.add}>COMPRAR</button>
            </div>
        </div>
    )

}

Product.propTypes = {
    item: PropTypes.object,
    add: PropTypes.func
}

export default Product