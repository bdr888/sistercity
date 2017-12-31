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

const Icon = styled.img`
  height: 30px;
  background-color: white;
  margin: 0 5px;
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
  Icon,
  Title,
  MyLink,
};
