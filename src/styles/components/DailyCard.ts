import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 0.5rem;
  margin: 0.5rem;
  width: 110px;
  height: auto;
  text-align: center;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  strong {
    color: ${props => props.theme.colors.primaryMedium};
  }
  p {
    margin: 4px;
  }
  .tempDaily {
    display: flex;
    justify-content: space-around;
    p {
      color: ${props => props.theme.colors.primaryDark};
      font-weight: 500;
    }
    .max {
      color: red;
    }
    /* margin-top: 4px; */
  }
`
