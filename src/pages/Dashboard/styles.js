import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    align-self: center;
  }

  button {
    border: 0;
    background: none;
  }

  strong {
    color: #fff;
    font-size: 22px;
    margin: 0 15px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 30px 0 50px 0;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    margin-left: 0;
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 16px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#666' : '#7159c1')};
  }
`;
