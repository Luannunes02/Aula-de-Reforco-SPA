import React from "react";
import Card from "../common/Card";
import Studing from "../../assets/studing.jpg"

import { Container, Text, ImgContainer, TextParalaxx } from "../../styles/StyledComponents/Service.styled"

export default function Service() {
    return (
        <Container id="service">
            <div className="container text-center" data-aos="fade-up" data-aos-duration="2000" >
                <Text className="text-light display-4">Aula de reforço para alunos do 1º ano ao 9º ano do ensino fundamental, oferencendo total suporte nas seguintes materias:</Text>
            </div>
            <div className="container mb-5" data-aos="fade-up" data-aos-duration="1000" >
                <Card />
            </div>
            <ImgContainer className="imgContainer container-fluid  gx-0">
                <TextParalaxx className="container" data-aos="fade-up" data-aos-duration="1000">
                As aulas de acompanhamento e reforço escolar são centradas no aluno, em suas potencialidades - visando reforçá-las - e buscando sanar suas dúvidas e dificuldades. De maneira dinâmica e com didática bastante lúdica e envolvente, resolvemos as tarefas de casa e os trabalhos propostos pela professora regente.
                </TextParalaxx>
            </ImgContainer>
        </Container>
    )
}