import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 200px;
  margin: 15px;
  }
`;

const Image = styled.div`
  height: 200px;
  width: 150px;
  border: 1px solid black;
  margin: 15px;
`;

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  border-bottom: 5px solid black;
  width: 160px;
`;

export {
  Wrapper,
  Image,
  Title,
};
