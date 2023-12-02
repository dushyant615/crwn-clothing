import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectcategoriesIsLoading } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {CategoryContainer, CategoryTitle} from './category.styles';

const Category = () => {
    const { category } = useParams(); 
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectcategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (
                    <Spinner/>
                ): (
                    <CategoryContainer>
                        {products && 
                            products.map((product)=>(
                                <ProductCard key={product.id} product={product}/>
                            ))  
                        }
                    </CategoryContainer>
                )
            }   
        </Fragment>
    )
}

export default Category;
// if our component rerender out products will not update unless category or categoriesMap changes