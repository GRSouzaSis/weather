import styled from 'styled-components'

export const Nav = styled.nav`
  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  height: auto;
  background: ${props => props.theme.colors.primary};
  align-items: center;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  /* justify-content: center; */

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
  }

  .search {
    display: flex;
    background-color: ${props => props.theme.colors.primaryMedium};
    padding: 0.8rem;
    border-radius: 8px;
    margin-right: 1rem;
    cursor: pointer;
  }
  input {
    @media (max-width: 720px) {
      font-size: 90.75%;
      width: 100%;
      text-align: center;
    }
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${props => props.theme.colors.background};
    font-size: 1rem;
    background-color: ${props => props.theme.colors.primaryMedium};
    border: none;
    outline: none;
    ::placeholder {
      color: ${props => props.theme.colors.background};
    }
  }
  .buttonReload {
    align-items: center;
    justify-content: center;
  }
  button {
    @media (max-width: 720px) {
      font-size: 80.75%;
      width: 100%;
    }
    height: 3rem;
    width: 50%;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background-color: ${props => props.theme.colors.primaryDark};
    color: ${props => props.theme.colors.background};

    font-size: 1rem;
    font-weight: 600;

    transition: 0.2s;
  }
  button:hover {
    filter: brightness(0.9);
  }
`
