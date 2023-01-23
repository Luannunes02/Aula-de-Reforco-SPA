import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer className="container-fluid gx-0">
            <p className="text-light opacity-75">
                Copyright © 2023 Luan Nunes
            </p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: #212121;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`