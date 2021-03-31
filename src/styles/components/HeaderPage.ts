import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100vw; */
  height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: ${props => props.theme.colors.primary};
  padding: 2rem;

  h1 {
    color: ${props => props.theme.colors.background};
  }

  div {
    display: flex;
    background-color: ${props => props.theme.colors.primaryDark};
    padding: 1rem;
    border-radius: 8px;
  }
  input {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primaryDark};
  }
`
