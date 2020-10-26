import React, {useState} from "react";
import {Input, Menu, Loader} from 'semantic-ui-react'
import {useAuth0} from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MenuBar = () => {
    const pathname: String = window.location.pathname;
    const path: String = pathname === "/" ? "home" : pathname.substr(1);
    const [activeItem, setActiveItem] = useState<String>(path);
    const {loginWithRedirect, isAuthenticated, logout, isLoading} = useAuth0();

    return (
        <>
            <Menu pointing>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={() => setActiveItem('home')}
                    as={Link}
                    to="/"
                />
                <Menu.Item
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={() => setActiveItem('profile')}
                    as={Link}
                    to="/profile"
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...'/>
                    </Menu.Item>
                    {isLoading ? <Loader style={{margin: "auto"}} inline='centered' active={isLoading}/> : isAuthenticated ? <Menu.Item
                        name='logout'
                        onClick={() => logout()}
                    /> : <Menu.Item
                        name='login'
                        onClick={() => loginWithRedirect()}
                    />}
                </Menu.Menu>
            </Menu>
        </>
    )
}

export default MenuBar;