import styled from '@emotion/styled';
import { Card, Typography, Button } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 15rem;
  height: 100%;
  margin: 0.5rem;
  box-shadow: 3;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const NameTypography = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AddToCartButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'fullWidth'
})(({ fullWidth }) => ({
  backgroundColor: 'white',
  color: 'black',
  width: fullWidth ? '100%' : '80%',
  fontWeight: 'bold',
  borderRadius: 20,
  border: '1px solid black',
  alignSelf: 'center',
  marginTop: 'auto',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white'
  }
}));
