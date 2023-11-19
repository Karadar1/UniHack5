import styled from '@emotion/styled';
import { primaryColor, secondaryColor } from 'src/const';

export const Container = styled.div`
  padding-top: 6.25rem;
  margin-bottom: 3rem;
`;

export const Label = styled.div`
  background: var(--secondary-color, ${secondaryColor});
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0 0.3125rem 0.3125rem 0;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    transition: color 0.3s ease;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  padding: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
