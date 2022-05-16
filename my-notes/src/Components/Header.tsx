import React, { FC } from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header: FC = () => {
    return (
        <Navbar fixed="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    Create Note App
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
