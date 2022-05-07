import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader/>
    }
    
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element= {<route.element/>}
                    path= {route.path}
                    key= {route.path}
                    >
                </Route>
            )}
            </Routes>
            :
            <Routes>
            {publicRoutes.map(route =>
                <Route
                    element= {<route.element/>}
                    path= {route.path}
                    key= {route.path}
                    >
                </Route>
            )}
        </Routes>
    );
};

export default AppRouter;