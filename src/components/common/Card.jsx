import React from "react";
import styled from "styled-components";
import Matemica from "../../assets/Materials/matematica.jpg"
import Caligrafia from "../../assets/Materials/caligrafia.jpg"
import Ciencias from "../../assets/Materials/ciencias.jpg"
import Estudos from "../../assets/Materials/estudos.jpg"
import Portuges from "../../assets/Materials/portugues.jpg"
import Geografia from "../../assets/Materials/geografia.jpg"
import Alfabetizacao from "../../assets/Materials/alfabetizacao.jpeg"


export default function Card() {
    return (
        <CardContainer>
            <p>
                <Img1 src={Matemica} alt="Matématica" />
                <span>MATÉMATICA</span>
            </p>
            <p>
                <Img1 src={Portuges} alt="Matématica" />
                <span>PORTUGUÊS</span>
            </p>
            <p>
                <Img1 src={Alfabetizacao} alt="Matématica" />
                <span>ALFABETIZAÇÃO</span>
            </p>
            <p>
                <Img1 src={Caligrafia} alt="Matématica" />
                <span>CALIGRAFIA</span>
            </p>
            <p>
                <Img1 src={Geografia} alt="Matématica" />
                <span>GEOGRAFIAA</span>
            </p>
            <p>
                <Img1 src={Ciencias} alt="Matématica" />
                <span>CIÊNCIAS</span>
            </p>
            <p>
                <Img1 src={Estudos} alt="Matématica" />
                <span>DENTRE OUTRAS...</span>
            </p>
        </CardContainer>
    )
}

const Img1 = styled.img`
    z-index: 0;
    opacity: 1.0;
    transition: all .3s;

    &:hover {
        opacity: 0.6;

    }
`

const CardContainer = styled.div`
    
  width: 100%;
  height: 254px;
  border-radius: 4px;
  background: #212121;
  display: flex;
  gap: 5px;
  padding: .4em;


 p {    
    display: inline-block;
    position: relative;
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: all .5s;
  background: #212121;
  border: 1px solid #ff5a91;
  display: flex;
  justify-content: center;
  align-items: center;
}

 p:hover {
  flex: 4;
}

 p span {
    position: absolute;
    background-color: #00DBDE;
background-image: linear-gradient(90deg, #fac5fc 0%, #fb00ff 100%);
    border-radius: 85% 15% 84% 16% / 4% 91% 9% 96% ;
  min-width: 14em;
  padding: .5em;
  text-align: center;
  transform: rotate(-90deg);
  transition: all .5s;
  text-transform: uppercase;
  color: #000;
  letter-spacing: .1em;
}

 p:hover span {
  transform: rotate(0);
  

  @media only screen and (max-width: 770px) {
    font-size: 10px;
}
}
`