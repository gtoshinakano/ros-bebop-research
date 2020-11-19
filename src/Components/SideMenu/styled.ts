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
    left: ${props => (props.isOpen ? 0 : "-250px")};  
    width: 250px;
    z-index: 1000;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
