import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  background-color: #7dde86;
  padding-inline-start: 5px;

  .header-title {
    font-weight: bold;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    background-color: #afa7a7;
    height: 5vh;
    gap: 10px;
    padding-inline-start: 5px;
    padding-inline-end: 5px;
  }

  .header-icon {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-start: 4px;
  }
`;