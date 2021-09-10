import React from 'react';
import { Router } from "@reach/router"
import Layout from '../components/layout';
import Client from '../components/client';
import Default from '../components/default';

const App = ()=> {
    const NotFound = () => (
        <div>Sorry, nothing here.</div>
      );

    return(
        <Layout>
            <Router basepath="/app">
                <Client path="/page1" />
                <Default path="/" />
            </Router>
            <NotFound default />            
        </Layout>
    )
}

export default App;