import { useSelector } from "react-redux";
import ItemList from "./itemList";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="text-center p-2 m-2" >
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    );
}


export default Cart;
