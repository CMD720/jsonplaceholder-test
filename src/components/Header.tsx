import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import {Container, Figure, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAppSelector} from "../redux/storeHooks";
import {idSelector} from "../redux/reducers/IdReducer";

const Header = () => {

    const navs = [{title: 'POSTS', value: '/'}, {title: 'ABOUT', value: '/about'}]
    const expand = false
    const {userIdSelected} = useAppSelector(idSelector)

    const isMounted = useRef(false)

    //сохранение данных в LS пропуская первый запуск приложения
    useEffect(() => {
        if (isMounted.current) {
            const userid = JSON.stringify(userIdSelected)
            localStorage.setItem('userSelected', userid)
        }
        isMounted.current = true
    }, [userIdSelected])

    return (
        <>
            <Navbar collapseOnSelect bg="primary" variant="dark" expand={expand} className="mb-3" sticky='top'>
                <Container fluid={"lg"}>
                    <Navbar.Brand>JSON Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`NavbarMenuBurger-${expand}`}/>
                    <Navbar.Offcanvas
                        id={`NavbarMenuBurger-${expand}`}
                        aria-labelledby={`NavbarMenuBurger-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`NavbarMenuBurger-${expand}`}>
                                <h4>Anton Hanzhin</h4>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Figure>
                                <Figure.Image
                                    width={80}
                                    height={80}
                                    alt="80*80"
                                    src="data:image/jpeg;base64,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"
                                />
                                <Figure.Caption>
                                    HanzhinAnton@gmail.com
                                </Figure.Caption>
                            </Figure>
                            <Nav className="pe-3">
                                {
                                    navs.map((nav) => (
                                        <Nav.Link href="#" as={Link} to={nav.value} key={nav.title} className="mb-2">
                                            <div>
                                                {nav.title}
                                            </div>
                                        </Nav.Link>
                                    ))
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;