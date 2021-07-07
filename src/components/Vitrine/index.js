
import './styles.css'

function Vitrine() {
    return (
        <div className='vitrine'>
            <h2>Mais Vendidos</h2>
            <div className='content'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>

    )
}

function Product() {
    return (
        <div className='product-content'>
            <img alt='produto' src='https://corebiz-test.herokuapp.com/images/product-1.png' className='product-img'/>
            <div className='product-info'>
                <p>PRODUTO</p>
                <div>stars</div>
                <p>por R$ 259,90</p>
                <p>ou em 9x de R$28,87</p>
                <button>COMPRAR</button>
            </div>
        </div>
    )

}

export default Vitrine