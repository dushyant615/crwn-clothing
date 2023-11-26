import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import {CheckoutItemContainer,ImageContainer,RemoveButton,Quantity,Decrement,Increment,Name,Price,Value} from './checkout-item.styles';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = ()=> dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = ()=> dispatch(removeItemFromCart(cartItems, cartItem));

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