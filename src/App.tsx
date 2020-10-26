import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Container, Loader} from "semantic-ui-react";
import MenuBar from "./components/MenuBar";
import {useAuth0} from "@auth0/auth0-react";

import Profile from "./pages/Profile"

function Home() {
    return <div>Hello world</div>
}

function App() {
    const {isLoading} = useAuth0();

    if (isLoading) return <Loader active size='massive'/>;

    return (
        <Router>
            <Container>
                <MenuBar/>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}/>
            </Container>
        </Router>
    );
}

export default App;
