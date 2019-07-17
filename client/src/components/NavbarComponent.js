import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'

const NavbarComponent = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/create">Add Show</a></li>
                    <li><a href="/user">Create User</a></li>
                    <RegisterModal />
                    <Logout />
                </ul>
            </div>

        </nav>
    </header>
);

export default NavbarComponent;