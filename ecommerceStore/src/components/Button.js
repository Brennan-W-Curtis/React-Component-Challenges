import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4em;
    background: transparent;
    border: 0.05em solid var(--lightBlue);
    border-color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5em;
    padding: 0.2em 0.5em;
    cursor: pointer;
    margin: 0.2em 0.5em 0.2em 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;

export default ButtonContainer