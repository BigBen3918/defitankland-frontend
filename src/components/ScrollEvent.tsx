import React from "react";
import { Link, Element } from "react-scroll";

type Props = {
    to: string;
    children: JSX.Element;
};

export const ScrollLink: React.FC<Props> = ({ to, children }) => (
    <Link to={to} spy={true} smooth={true} duration={50}>
        {children}
    </Link>
);

export const ScrollElement: React.FC<Props> = ({ to, children }) => (
    <Element name={to}>{children}</Element>
);
