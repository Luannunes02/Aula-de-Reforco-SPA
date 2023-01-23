import React from "react";
import { Container, WarningText } from "../../styles/StyledComponents/Contact.styled"
import Whatsapp from "../../assets/whatsapp.png"

export default function Contact() {
    return (
        <Container id="contact">
            <div className="container text-center" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="pt-5 display-3">Entre em contato comigo</h1>
                <div>
                    <p>Whatsapp: (61) 99908-8328</p>
                    <a target="_blank" href="https://wa.me/5561999088328?text=Ol%C3%A1+Mayra%2C+estou+querendo+aula+de+refor%C3%A7o+para+meu+filho%28a%29%21">
                        <img src={Whatsapp} className="col col-lg-2 img-fluid" alt="Whatsapp logo" />
                    </a>
                    <div className="d-flex justify-content-center">
                        <WarningText className="mt-4 pt-2 col col-lg-6 mb-5">
                            <p className="mb-0 text-danger">As aulas de reforço presenciais são na Estrutural, Brasília-DF.</p>
                            <p className="mt-0 text-danger">Favor entrar em contato para demais informações como por exemplo valor.</p>
                        </WarningText>
                    </div>

                </div>
            </div>

        </Container>
    )
}