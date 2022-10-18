import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  align-self: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  border: none;

  header {
    display: flex;
    flex-direction: row;
    width: 100%;

    button {
      width: 50%;
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      font-size: 16px;
      font-weight: 400;
      transition: 0.4s;
      border-bottom: 1px solid #fff;
      color: #6c7072;

      &:hover {
        background-color: #f7f7f7;
      }

      &.active {
        color: #23c16b;
        border-bottom: 1px solid #23c16b;
      }
    }
  }
`;

export const TabContent = styled.div``;
