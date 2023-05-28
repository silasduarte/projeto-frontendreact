import styled from "styled-components";

export const Button = styled.button`
  color: #ffffff;
  width: 30%;
  cursor: pointer;
  margin-top: 5px;
  background-color: #61415f;
  height: 30px;
  border-radius: 10px;
  &:hover {
    background-color: #ff03ee;
    color: black;
  }
`;
export const Image = styled.img`
  width: 35px;
  height: 35px;
  padding-right: 5px;
`;
export const ItensCarrrinho = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Remover = styled.div`
  display: flex;
`;
