import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  background-color: #7DDE86;
  padding-inline-start: 5px;

  .header-title {
    font-weight: bold;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    background-color: #afa7a7;
    height: 5vh;
    gap: 5px;
    padding-inline-start: 5px;
    padding-inline-end: 5px;
  }

  .header-icon {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`