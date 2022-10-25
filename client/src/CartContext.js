import { createContext, useState } from "react";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([{
        id: 1,
        title: "Jbl Speaker",
        quantity: 3,
        image:"https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/515737/1.jpg?5488",
        price: 20000
    },
    {
        id: 2,
        title: "Anker Speaker",
        quantity: 1,
        image:"https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/066834/1.jpg?2193" ,
        price: 20000
    },
    {
        id: 3,
        title: "Vankyo Wireless Wifi Projector",
        quantity: 1,
        image:"https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/322376/1.jpg?0153",
        price:10000
    }]);


    

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { 
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                
                    ? { ...product, quantity: product.quantity + 1 }  
                    : product                                         
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                
                    ? { ...product, quantity: product.quantity - 1 }  
                    : product                                        
                )
            )
        }
    }

    function deleteFromCart(id) {
       
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })  
        )
    }

    function getTotalCost() {
        const totalPrice=cartProducts.reduce((acc,cart)=>acc+cart.price,0)
        const totalQuantity=cartProducts.reduce((acc,cart)=>acc+cart.quantity,0)

         return totalPrice*totalQuantity

    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;