import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 47px;
  height: 25vh;
  justify-content: center;

  margin-block-start: 41px;
  margin-inline-start: 34px;
  margin-inline-end: 49px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  img {
    height: 68px;
    width: 188px;
    border-radius: 10px;
  }

  input {
    height: 36px;
    width: 461px;
    border-radius: 10px;
    margin-block-start: 10px;
    background: #e2e2e2;
    box-shadow: 0 3px 6px rgba(95, 123, 145, 0.2);
    border: none;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 600px) {
      width: 300px;
    }
  }
`;
