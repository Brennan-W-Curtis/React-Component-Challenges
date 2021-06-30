import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import ButtonContainer from './Button';

class Navbar extends React.Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <h1 className="navbar-brand">3D Art</h1>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span>
                            <FaCartPlus className="mr-2" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </Nav>
        );
    }
}

const Nav = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3em;
        text-transform: capitalize;
    }
`;

export default Navbar;