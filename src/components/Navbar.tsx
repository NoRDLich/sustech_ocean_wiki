// src/components/Navbar.tsx
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 0) {
                setIsNavbarVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsNavbarVisible(false); // Hide on downward scroll
            } else {
                setIsNavbarVisible(true); // Show on upward scroll
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = Pages.map((item, pageIndex) => {
        if ("folder" in item && item.folder) {
            return (<NavDropdown
                    key={`dropdown-${pageIndex}`}
                    title={item.name}
                    id={`${(item.name ?? "unknown").toLowerCase()}-dropdown`}
                >
                    {item.folder.map((subPage) => (<NavDropdown.Item
                            key={subPage.name}
                            as={Link}
                            to={subPage.path ?? "/"}
                        >
                            {subPage.name}
                        </NavDropdown.Item>))}
                </NavDropdown>);
        } else if ("path" in item && item.path) {
            return (<Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
                    {item.name}
                </Nav.Link>);
        }
        return null;
    });

    return (<BootstrapNavbar
            expand="lg"
            className={`custom-navbar ${isNavbarVisible ? "visible" : "hidden"}`}
            fixed="top"
            variant="light"
        >
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/">
                    {import.meta.env.VITE_TEAM_NAME}
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav"/>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="left-aligned">{navLinks}</Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>);
}