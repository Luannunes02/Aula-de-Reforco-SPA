import styled from 'styled-components';

export const Navbar = styled.header`
    height: 5vh;
    background-color: #E0ACD5;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #E0AC;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 100%;    
`

export const Li = styled.li`
    list-style: none;
`

export const A = styled.a`
    font-size: 1.2em;
    font-weight: bold;
  background-image: linear-gradient(
    to right,
    #fff,
    #fff 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;


&:before{
  content: '';
  background: #fff;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

&:hover {
    filter: brightness(1.5em);
 background-position: 0;
}

&:hover::before{
  width: 100%;
}
`

