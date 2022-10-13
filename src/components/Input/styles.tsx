import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-block-start: 10px;
  position: relative;

  input {
    height: 36px;
    width: 461px;
    border-radius: 8px;
    background: #f2f4f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    text-indent: 30px;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 600px) {
      width: 300px;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
`;
