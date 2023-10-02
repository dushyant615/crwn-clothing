import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CustomButton,Footer,Image,Name,Price,ProductCardContainer} from './product-card.styles';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product);

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