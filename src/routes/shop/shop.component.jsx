import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategories = async ()=>{
            const categoriesMapArray=await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesMapArray));
        }
        getCategories();
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