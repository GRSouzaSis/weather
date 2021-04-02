import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 0.5rem;
  width: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  p {
    margin: 4px;
  }
  .tempDaily {
    display: flex;
    justify-content: space-around;
    /* margin-top: 4px; */
  }
`
