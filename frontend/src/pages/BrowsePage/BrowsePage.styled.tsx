import styled from "@emotion/styled";
import { primaryColor, secondaryColor } from "src/const";

export const Container = styled.div`
  padding-top: 100px;
  margin-bottom: 2cm;
`;

export const Label = styled.div`
  background: ${secondaryColor};
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 15px;

  border-radius: 0 5px 5px 0;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  span {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const SearchInputContainer = styled.div`
  border-bottom: 2px solid ${primaryColor};
  min-width: 20vw;
  width: max-content;
  margin-left: 5vw;
  margin-top: 5vh;

  padding: 0 60px 5px 20px;
  position: relative;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  input {
    height: 40px;
    font-family: "Montserrat", sans-serif;
    border: none;
    font-size: 2rem;
  }
`;

export const SortButton = styled.div`
  position: absolute;
  top: 30%;
  right: 0%;
  transform: translateX(130%);
  height: 25px;
  width: max-content;
  button {
    background: #f5f5f5;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const BikeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 70%;
  margin-left: 15%;
  margin-top: 40px;
`;

export const BikeCard = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);

  img {
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }

  .view-link {
    color: ${primaryColor};
    text-decoration: underline;
    cursor: pointer;
  }
`;
