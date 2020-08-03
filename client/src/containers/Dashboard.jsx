import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';
import { DataLayer } from './DataLayer';
import { ProductDetails } from './ProductDetails';

const PageRoutes = () => (
    <div>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={DataLayer}/>
                <Route exact path="/product" component={ProductDetails}/>
            </Switch>
        </HashRouter>
    </div>
)

export const Dashboard = () => {
    const breweryData = useSelector(state => state.breweryData);
    const dispatch = useDispatch();

    console.log("data : ", breweryData);

    return (
        <div className="brewery-dashboard-wrapper">
            <NavigationBar/>
            <PageRoutes/>
        </div>
    );
}