import './styles.css';
import logo from '../../assets/logo-corebiz.png';
import userIcon from '../../assets/user-icon.png';
import cartIcon from '../../assets/cart-icon.png';
import searchIcon from '../../assets/search-icon.png';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';



function Header() {

    const context = useContext(CartContext)
    const [canCartView, setCanCartView] = useState(false)
    
    return (
        <div className='header'>
            <img alt='LOGO' src={logo} className='logo' />
            <div className='search-box'>
                <input placeholder='O que está procurando?' type='text' id='search-input' name='search-input'></input>
                <img alt='search' src={searchIcon} />
            </div>
            <div className='infos'>
                <div className='account'>
                    <img alt='user' src={userIcon} /><p>Minha Conta</p></div>
                <div className='cart'>
                    <img alt='cart' src={cartIcon} onClick={()=> setCanCartView(!canCartView)} />
                    <div className='cart-counter'>{context.cartItens}</div>
                    <div className={canCartView ? 'cart-view' : 'hidden-cart-view'}>
                        <button>Ver Carrinho</button>
                        <button onClick={context.handleClearCartItens}>Limpar Carrinho</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header