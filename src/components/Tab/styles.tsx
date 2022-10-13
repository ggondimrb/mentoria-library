import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;

  button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const TabContent = styled.div`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;
