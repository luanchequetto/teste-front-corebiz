import {createContext, useState} from 'react'


export const CartContext = createContext()

export const CartProvider = ({ children }) =>{
    const localValue = localStorage.getItem('cartItens') === null ? 0 : parseInt(localStorage.getItem('cartItens'))
    const [cartItens, setCartItens] = useState(localValue)

    const handleAddtoCart= () => {
        localStorage.setItem('cartItens', cartItens+1)
        setCartItens(cartItens+1)
        
        
    }

    return(
        <CartContext.Provider value={{cartItens, handleAddtoCart}} style={{display: 'flex', 'flex-wrap': 'wrap'}}>
            {children}
        </CartContext.Provider>
    )
}