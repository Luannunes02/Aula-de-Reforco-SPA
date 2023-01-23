import React from "react";
import { Navbar, Ul, Li, A } from '../../styles/StyledComponents/Header.styled'

export default function Header() {
    return (
        <Navbar className="container-fluid row mx-0 gx-0 px-0">
            <Ul className="col col-lg-3 px-5">
                <Li>
                    <A href="#about">Inicio</A>    
                </Li>
                <Li>
                    <A href="#service">Serviço</A>    
                </Li>
                <Li>
                    <A href="#contact">Contato</A>    
                </Li>
            </Ul>
        </Navbar>
    )
}