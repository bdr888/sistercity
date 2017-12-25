import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 200px;
  margin: 15px;

  @media (min-width: 700px) {
      height: 100%;
      width: 100%;
      align-items: left;
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
`;

export {
  Wrapper,
  Image,
  Title,
};
