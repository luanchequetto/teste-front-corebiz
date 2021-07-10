import './styles.css';
import logo from '../../assets/logo-corebiz.png';
import userIcon from '../../assets/user-icon.png';
import cartIcon from '../../assets/cart-icon.png';
import searchIcon from '../../assets/search-icon.png';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';



function Header() {

    const context = useContext(CartContext)
    
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
                    <img alt='cart' src={cartIcon} />
                    <div className='cart-counter'>{context.cartItens}</div>
                </div>
            </div>

        </div>
    )
}

export default Header