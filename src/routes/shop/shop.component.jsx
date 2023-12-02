import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchCategoriesAsync());
    },[])

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
};

export default Shop;
// we cannot use Route component if its immediate parent is Routes component
// this is example of nested routes lesson 134
// :category should be same(name) while accessing it like ==> const { category } = useParams();