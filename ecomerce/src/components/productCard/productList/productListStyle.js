import styled from "styled-components";

export const CardBox = styled.div`
  background-color: #021925;
  opacity: 0.8;
  border: 2px solid black;
  width: 30%;
  height: 30vh;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  &:hover {
    opacity: 1;
  }
`;
export const Imagem = styled.img`
  max-width: 100%;
  max-height: 65%;
`;
export const CardTexBox = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const ImagBox = styled.div`
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  color: black;
  width: 50%;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
