import React, {Component} from 'react';
import RestarauntsList from '../RestarauntsList/RestarauntsList'
import {restaurants} from '../../api/fixtures'
import "antd/dist/antd.css";
import './App.css'
import Header from '../Header/Header'

export default class App extends Component{
    render() {
    return(
        <div>
            <Header />
            <RestarauntsList restaurants = {restaurants}/>
        </div>
    )
}
}
