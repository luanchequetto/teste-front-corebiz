import './styles.css';
import logo from '../../assets/logo-corebiz.png';
import userIcon from '../../assets/user-icon.png';
import cartIcon from '../../assets/cart-icon.png';
import searchIcon from '../../assets/search-icon.png';



function Header(props) {

    var cartItens = props.cartItens
    localStorage.setItem('cartItens', cartItens)
    return (
        <div className='header'>
            <img alt='LOGO' src={logo} className='logo' />
            <div className='search-box'>
                <input placeholder='O que está procurando?' type='text' id='search-input' name='search-input'></input>
                <img alt='search' src={searchIcon} />
            </div>
            <div className='infos'>
                <div className='account'>
                    <img alt='user' src={userIcon} />Minha Conta</div>
                <div className='cart'>
                    <img alt='cart' src={cartIcon} />
                    <div className='cart-counter'>{cartItens}</div>
                </div>
            </div>

        </div>
    )
}

export default Header