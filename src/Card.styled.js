import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 200px;
  margin: 15px;
`;

const Image = styled.img`
  height: 200px;
  width: 150px;
  margin: 15px;
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  width: 160px;
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
