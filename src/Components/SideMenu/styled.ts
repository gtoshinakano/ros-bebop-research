// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

type ContainerProps = {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: fixed;
    min-height: 100%;
    background-color: white;
    transition: left .3s cubic-bezier(0.6, 0.05, 0.28, 0.91);
    overflow: hidden;
    left: ${props => (props.isOpen ? 0 : "-270px")};  
    width: 270px;
    z-index: 1000;
    display: flex;
    flex-direction:column;
`;

type HeaderProps= {
  theme : any
}

export const Header = styled.div<HeaderProps>`
  width: 100%;
  padding: 10px;
  text-align: center;
`

export const MenuContainer = styled.div`
  flex-grow:1;
`

export const DefaultChangerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding:2px 4px;
  font-family: Noto Sans JP;
  font-weight: 200;
  background-color: palevioletred;
`
