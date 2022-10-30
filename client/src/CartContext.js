import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    clearCart:()=>{},
    singleTotal:()=>{}
});

export function CartProvider({children}) {

    const inCart=JSON.parse(localStorage.getItem("cart")|| '[]')

    const [cartProducts, setCartProducts] = useState(inCart);

    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(cartProducts))
    }, [cartProducts])


    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id,item) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) { 
            setCartProducts(
                [
                    {
                        id: id,
                        price:item.price,
                        image_url:item.image_url,
                        product_name:item.product_name,
                        quantity: 1
                    },
                    ...cartProducts
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
                return currentProduct.id !==id;
            })  
        )
    }

    function getTotalCost() {
        const totalPrice=cartProducts.reduce((acc,cart)=>acc+cart.price*cart.quantity,0)
        return totalPrice
    }

    function clearCart(){
       return setCartProducts([])  
    }

   function singleTotal(id){
   const singleProduct= cartProducts.find(product => product.id === id)

    return singleProduct


   }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        clearCart,
        singleTotal
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;