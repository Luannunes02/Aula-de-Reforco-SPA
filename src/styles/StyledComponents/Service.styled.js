import styled from "styled-components";
import img from './studing.jpg'

export const Container = styled.section`
    background-color: rgb(31,31,31);
    min-height: 80vh;
`

export const Text = styled.h1`
    padding-top: 80px;
    padding-bottom: 50px;
    text-shadow: 4px 4px 5px rgba(240,0,255,1);
    transition: all .5s;

    &:hover {
        text-shadow: 4px 4px 15px rgba(240,0,255,1);
    }
`

export const ImgContainer = styled.div`
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${img});
    object-fit: cover;
    width: 100%;
    min-height: 30vh;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`


export const TextParalaxx = styled.h3`
    background-color: #FEE140;
background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    padding: 50px;
    color: #fff;
    margin: 90px 0;
    opacity: 0.88;
    box-shadow: -2px 6px 54px 0px rgba(0,0,0,0.97);
    text-shadow: 1px 4px 3px rgba(0,0,0,0.72);
    border-radius: 85% 15% 75% 25% / 30% 87% 13% 70% ;
`
