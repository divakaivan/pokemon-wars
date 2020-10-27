import React, {useState} from "react";
import {Input, Menu, Loader} from 'semantic-ui-react'
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";
import {CgPokemon} from "react-icons/cg"
import {ImExit} from "react-icons/im"

const MenuBar = () => {
    const pathname: string = window.location.pathname;
    const path: string = pathname === "/" ? "home" : pathname.substr(1);
    const [activeItem, setActiveItem] = useState<string>(path);
    const {loginWithRedirect, isAuthenticated, logout, isLoading} = useAuth0();

    return (
        <>
            <Menu pointing>
                <Menu.Item children={<CgPokemon/>}/>
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
                    {isLoading ?
                        <Loader style={{margin: "auto"}} inline='centered' active={isLoading}/> : isAuthenticated ?
                            <Menu.Item
                                icon={<ImExit color={"grey"}/>}
                                onClick={() => logout()}
                            />
                            : <Menu.Item
                                name='login'
                                onClick={() => loginWithRedirect()}
                            />}
                </Menu.Menu>
            </Menu>
        </>
    )
}

export default MenuBar;