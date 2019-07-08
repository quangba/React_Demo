import React from "react";
import HomePages from "./pages/HomePages/HomePages";
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";
import ProductListPages from "./pages/ProductListPages/ProductListPages";
import ProductActionPage from "./pages/ProductActionPages/ProductActionPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () =>  <HomePages /> 
    },
    {
        path: '/product-list',
        exact: false,
        main: ()=><ProductListPages />
    },
    {
        path:'/product/add',
        exact: false,
        main: ()=> <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match})=> <ProductActionPage match = {match} />
    },
    {
        path: '',
        exact: false,
        main: () =>  <NotFoundPages /> 
    }
];

export default routes;