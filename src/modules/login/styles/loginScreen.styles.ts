import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  margin-left: auto;
  margin-right: 0;
`;

export const LimitedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 498px;
  margin-left: 22px;
  margin-right: 22px;
`;
