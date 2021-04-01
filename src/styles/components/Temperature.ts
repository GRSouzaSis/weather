import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem;
  .HeaderTitle {
    align-items: center;
    justify-content: center;
  }
  .title {
    color: ${props => props.theme.colors.primaryDark};
    font-weight: 600;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
`

export const Temperatura = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  div {
    display: flex;
    p {
      margin-left: 1rem;
      color: blue;
    }
    .max {
      color: red;
    }
  }
`
export const Chuva = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  div {
    display: flex;
    p {
      margin-left: 1rem;
    }
  }
`
export const Vento = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
`
export const Umidade = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  div {
    display: flex;
    p {
      margin-left: 1rem;
      color: blue;
    }
    .max {
      color: red;
    }
  }
`
