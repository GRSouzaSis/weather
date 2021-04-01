import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  display: flex;
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
  section {
    align-items: center;
    justify-content: center;
  }
`
export const HeaderPage = styled.div``
