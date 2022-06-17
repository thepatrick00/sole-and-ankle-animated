import React from 'react'
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';


const NavLink = ({children, ...delegated}) => {

    return (
        <Wrapper {...delegated}>
            <Link>
                {children}
            </Link>
            <HoverLink>
                {children}
            </HoverLink>
        </Wrapper>
    )
};

const Wrapper = styled.a`
    position: relative;
    overflow: hidden;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    --enter-speed : 700ms;
    --leave-speed : 1200ms;
    &:first-of-type {
    color: var(--color-secondary);
    }
`;

const Link = styled.span`
    display: block;
    transition: transform var(--leave-speed);

    ${Wrapper}:hover & {
        transition: transform var(--enter-speed);
        transform: translateY(-100%);
    }
`;

const HoverLink = styled.span`
    display: block;
    font-weight: bold;
    position: absolute;
    top: 0;
    transition: transform var(--leave-speed);
    transform: translateY(100%);

    ${Wrapper}:hover & {
        transition: transform var(--leave-speed);
        transform: translateY(0);
    }
`;

export default NavLink;