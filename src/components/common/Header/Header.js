import React from 'react'
import styles from "./Header.module.scss";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className={styles.header}>
                <Container>
                    <Navbar.Brand href="#home">Animations</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`me-auto gap-3 ${styles.navbar}`}>
                            <NavLink to={ROUTES.HOME}>Home</NavLink>
                            <NavLink to={ROUTES.REVEAL_IMAGES}>Image Reveals</NavLink>
                            <NavLink to={ROUTES.SPLIT_VIGLETTA}>Split Vigletta</NavLink>
                            <NavLink to={ROUTES.MASK_CURSOR}>Mask Cursor</NavLink>
                            <NavLink to={ROUTES.FRAMER_MODAL}>Framer Modal</NavLink>
                            <NavLink to={ROUTES.SCROLL_PROGRESS}>Scroll Progress</NavLink>
                            <NavLink to={ROUTES.MAKE_PROGRESS_WHEN_IN_VIEW}>Progress in View</NavLink>
                            <NavLink to={ROUTES.SCROLL_TEXT_WITH_SCROLLING}>Scroll Text with Scrolling</NavLink>
                            <NavLink to={ROUTES.REVEAL_TEXT_ON_VIEW}>Reveal Text on View</NavLink>
                            <NavLink to={ROUTES.WELCOME_PAGE}>Welcome Page</NavLink>
                            <NavLink to={ROUTES.ONSCROLL_ZOOM}>On Scroll Zoom</NavLink>
                            <NavLink to={ROUTES.ANIMATED_BUTTONS}>Animated Buttons</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
