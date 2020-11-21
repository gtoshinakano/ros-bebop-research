import  styled, {createGlobalStyle} from "styled-components";

export const ThemedGlobal = createGlobalStyle`
  body{
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.palette.common.color};
  }
`

type DimmerProps = {
  isOpen: boolean;
}

export const Dimmer = styled.div<DimmerProps>`
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.8);
  height: 100%;
  width:100%;
  position: fixed;
  width: ${props => (props.isOpen ? "100%" : 0)};
  top: 0;
  left: 0;
`