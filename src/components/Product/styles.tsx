import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 160px;
  text-decoration: none;

  img {
    width: 120px;
    height: 120px;
    margin-block-end: 9px;
  }

  strong {
    font-weight: 700;
    font-size: 13px;
    color: #198155;
    margin-block-end: 2px;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    color: #090a0a;
    padding: 5px;
    border-radius: 25px;

    border: 1px solid #818080;
  }
`;
