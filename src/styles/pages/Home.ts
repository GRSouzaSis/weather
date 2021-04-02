import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }

  /* p {
    font-size: 16px;
    line-height: 32px;
  } */
  section {
    align-items: center;
    justify-content: center;
  }
`
export const CardDaily = styled.div``
