import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 170px;
`;

const Image = styled.img`
  height: auto;
  width: 170px;
  margin: 15px;
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  font-family: 'Cabin', sans-serif;
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
  Image,
  Title,
  MyLink,
};
