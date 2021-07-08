import './styles.css'
import offerFlag from '../../assets/offer-flag.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import starIcon from '../../assets/star-icon.png'
import staredIcon from '../../assets/stared-icon.png'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import {CartContext} from '../CartContext'

function Vitrine(props) {
    const [products, setProducts] = useState([])

    const cartItens = useContext(CartContext)
    const add = () =>{
        cartItens.handleAddtoCart(cartItens)
        
    }
    console.log(products)
        
    

    useEffect(() => {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
            .then((res) => {
                setProducts(res.data)
            })
    }, [])




    return (
        <div className='vitrine'>
            <h2>Mais Vendidos</h2>
            <div className='line' />

            <div className='content'>
                <img alt='' src={leftArrow} className='left-arrow' />
                {products.map((item) => {
                    item.flag = Boolean(Math.round(Math.random()))
                    return (
                        <Product key={item.productId} item={item} add={add} cartItens={cartItens}/>
                    )
                })}
                <img alt='' src={rightArrow} className='right-arrow' />
            </div>

        </div>

    )
}

function Product(props) {

    
    function stringfyNumberAndReplaceDot(value) {
        let result = (value / 100).toFixed(2).toString().replace('.', ',')
        return result
    }

    return (
        <div className='product-content'>
            <div className='img-content'>
                <img alt='produto' src={props.item.imageUrl} className='product-img' />
                <img alt='produto' src={offerFlag} style={props.item.flag ? {} : { display: 'none' }} className='product-flag' />
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
                <p id='product-price'>por R$ {stringfyNumberAndReplaceDot(props.item.price)}</p>
                {props.item.installments[0] !== undefined ?
                    <p id='product-parcelation'>ou em {props.item.installments[0].quantity}x de R${stringfyNumberAndReplaceDot(props.item.installments[0].value)}</p>
                    : <p id='product-parcelation'></p>}


                <button className='buy-button' onClick={props.add}>COMPRAR</button>
                {console.log(props.cartItens)}
            </div>
        </div>
    )

}

export default Vitrine