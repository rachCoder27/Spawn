import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(75px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000045;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  width: auto;
  width: 500px;
  height: 200px;
  background-color: ${({ theme }): string => theme.sb};
  padding: 25px;
  border-radius: 10px;
  transition: 0.2s all ease-in-out;
  animation: ${slideIn} .2s ease-in-out alternate;
  box-shadow: 0 12px 11px ${({ theme }): string => theme.sb}4D, 0 19px 4px ${({ theme }): string => theme.sb}38;
  p {
    text-align: left !important;
    margin-top: 15px;
  }
`;
