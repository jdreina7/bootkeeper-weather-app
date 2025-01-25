import styled from "styled-components"

const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;




export const Footer = () => {
  return (
    <FooterContainer>
        <h1>Septum Soluciones Web</h1>
        <h2>Open Weather</h2>
    </FooterContainer>
  )
}
