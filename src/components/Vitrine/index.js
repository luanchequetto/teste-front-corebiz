import './styles.css'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Product from '../Product'

function Vitrine() {
    const [products, setProducts] = useState([])

    const cartItens = useContext(CartContext)
    const add = () => {
        cartItens.handleAddtoCart(cartItens)
    }

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
                    return (
                        <Product key={item.productId} item={item} add={add} />
                    )
                })}
                <img alt='' src={rightArrow} className='right-arrow' />
            </div>
        </div>

    )
}



export default Vitrine