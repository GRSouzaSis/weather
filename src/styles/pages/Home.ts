import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }
`
export const CardDaily = styled.div`
  @media (max-width: 720px) {
    font-size: 98.75%;
    width: 100%;
  }
  height: auto;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
`
