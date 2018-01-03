import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30px;
  padding: 20px;
  background-color: white;
  color: black;
`;

const Sombrero = styled.img`
  height: 50px;
`;

const Title = styled.div`
  font-family: 'Comfortaa', cursive;
  font-size: 1.5em;
  text-align: center;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;

    &:link{
      color: black;
    }
    
    &:hover{
      color: grey;
    }
    
    &:active{
      color: #f410b1;
    }
 `;

export {
  Wrapper,
  Sombrero,
  Title,
  MyLink,
};
