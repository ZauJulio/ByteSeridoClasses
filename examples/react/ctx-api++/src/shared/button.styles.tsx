import styled from "styled-components";

const ButtonContdown = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 100%;
  height: 2rem;

  padding: 1.7rem 3rem 1.7rem 3rem;

  border-radius: 8px;
  border: 0;

  border-radius: 21px;
  background: #171817;
  box-shadow: -10px 10px 5px aquamarine;
  color: #7efbd2;

  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: -10px 10px 5px #4d9e83;

    background: #0a0a0a;
  }
`;

export default ButtonContdown;
