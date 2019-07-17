import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const NavbarComponent = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">SHOWSPACE</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <RegisterModal />
                    <LoginModal />
                    <Logout />
                </ul>
            </div>

        </nav>
    </header>
);


export default NavbarComponent;