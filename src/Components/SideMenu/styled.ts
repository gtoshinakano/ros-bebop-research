// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

type ContainerProps = {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    min-height: 100vh;
    background-color: white;
    transition: width .3s cubic-bezier(0.6, 0.05, 0.28, 0.91);
    overflow: hidden;
    width: ${props => (props.isOpen ? "250px" : 0)};  
    z-index: 1000;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
