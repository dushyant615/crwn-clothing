import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CustomButton,Footer,Image,Name,Price,ProductCardContainer} from './product-card.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name className='name'>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</CustomButton>
        </ProductCardContainer>
    );
};

export default ProductCard;