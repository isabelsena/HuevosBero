import React from 'react';

import { Navbar } from '../shared/navbar/Navbar'

import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { Products } from '../pages/products/Products';
import { Payments } from '../pages/payments/Payments';
import { Domicilio } from '../pages/domicilios/Domicilios';
import { Compra } from '../pages/compras/Compras';

import { Route, Switch, useRouteMatch } from 'react-router-dom';


export const Router = () => {

    let { path, url } = useRouteMatch();

    return (
        <>
            <Navbar url={url} />
            

            <Switch>
                
                <Route exact path={path}>
                    <Home />
                </Route>
                
                <Route path={`${path}login`}>
                    <Login />
                </Route>

                <Route path={`${path}registro`}>
                    <Register />
                </Route>

                <Route path={`${path}productos`}>
                    <Products />
                </Route>

                <Route path={`${path}pagos`}>
                    <Payments />
                </Route>

                <Route path={`${path}compras`}>
                    <Compra />
                </Route>

                <Route path={`${path}domicilio`}>
                    <Domicilio />
                </Route>



            </Switch>
        </>
    )
}
