import styled from 'styled-components'

export const Card = styled.div`
  @media (max-width: 720px) {
    font-size: 93.75%;
    width: 100%;
  }
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  margin: 1rem;
  height: 85%;
  width: 95%;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
`
