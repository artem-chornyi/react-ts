import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={ <Layout/> } >
                    <Route index element={ <HomePage/> } />
                    <Route path={'/users'} element={ <UserPage/> } />
                    <Route path={'/todos'} element={ <TodoPage/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
