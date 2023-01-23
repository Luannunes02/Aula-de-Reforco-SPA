import React from "react";
import { Main, Title, SubTitle, ImgMayra, ImgContainer, Text } from "../../styles/StyledComponents/About.styled"

import Mayra from '../../assets/mayra.jpg'
import ABC from "../../assets/abc.jpg"

export default function About() {
    return (
        <Main className="container" id="about">
            <div className="justify-content-md-center text-center mt-5" data-aos="fade-up" data-aos-duration="800">
                <Title>Seu filho(a) está precisando de aula de reforço?</Title>
                <SubTitle>Conheça meu trabalho!</SubTitle>
            </div>
            <div className="mt-5 row" data-aos="fade-up" data-aos-duration="1200">
                <ImgContainer className="col col-lg-4">
                    <ImgMayra src={Mayra} alt="MayraPicture" />
                </ImgContainer>
                <div className="col col-lg-8 mt-4">
                    <Text >
                        Meu nome é Mayra, sou formada em Pedagogia e dou aula de reforço a mais de 2 anos, tanto presencial quanto remoto(por meio de whatsapp), possuo diversos alunos e alunas incluindo 2 alunas do Estados Unidos que atendo de forma remota.
                    </Text>
                    <Text >
                        Trabalho com alfabetização de forma lúdica, criativa e com ótima didática para o melhor aprendizado do aluno.
                    </Text>
                    <div className="text-center mt-5 mb-5">
                        <img src={ABC} className="img-fluid" alt="abc" />
                    </div>

                </div>


            </div>
        </Main>
    )
}