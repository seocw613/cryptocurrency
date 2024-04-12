import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 40px;
    height: 40px;
    top: 10px;
    border-radius: 50%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        border-radius: 50%;
        svg {
            width: 2rem;
            transform: translate(-2px, 0px);
        }
    }
`;

export default function BackButton() {
    return (
        <Wrapper>
            <Link to="/">
                <span>
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                </span>
            </Link>
        </Wrapper>
    );
}