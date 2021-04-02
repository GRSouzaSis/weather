import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 720px) {
    font-size: 93.75%;
    width: 100%;
  }
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);

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
    font-size: 1rem;
  }
`

export const Temperatura = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 16px 0;
  align-items: center;
  div {
    display: flex;
    p {
      margin-left: 1rem;
      color: ${props => props.theme.colors.primaryDark};
      align-items: center;
      font-weight: 500;
    }
    .max {
      align-items: center;
      color: red;
    }
  }
`
export const Chuva = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 16px 0;
`
export const Vento = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 16px 0;
  align-items: center;
`
export const Umidade = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  align-items: center;
`
