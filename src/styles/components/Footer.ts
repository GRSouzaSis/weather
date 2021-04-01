import styled from 'styled-components'

export const FooterSection = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 0;
`
