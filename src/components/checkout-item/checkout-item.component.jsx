import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {CheckoutItemContainer,ImageContainer,RemoveButton,Quantity,Decrement,Increment,Name,Price,Value} from './checkout-item.styles';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = ()=>addItemToCart(cartItem);
    const removeItemHandler = ()=>removeItemFromCart(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Decrement onClick={removeItemHandler}>&minus;</Decrement>
                <Value>{quantity}</Value>
                <Increment onClick={addItemHandler}>&#43;</Increment>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckOutItem;