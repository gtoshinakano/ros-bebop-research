// #region Global Imports
import styled from "styled-components";
import {breakpoint} from "@Definitions/Styled"
// #endregion Global Imports

type Container = {
  isOpen: boolean;
}

export const Container = styled.div<Container>`
    position: absolute;
    right: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 1500;
    transition: transform 650ms ease-out;
    transform: ${props => props.isOpen ? "rotate(-45deg)" : ""};
    ${breakpoint.xs} { bottom: 15px; top: auto}
    ${breakpoint.sm} { bottom: 15px; top: auto}
    ${breakpoint.md} { top: 15px; bottom: auto}
    ${breakpoint.lg} { top: 15px; bottom: auto}
    ${breakpoint.xl} { top: 15px; bottom: auto}
`;

type Bar = {
  start?: number;
  end?: number;
  half?: boolean;
  isOpen: boolean; 
}

const transition = "transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57)";
export const Bar = styled.div<Bar>`
  background: linear-gradient(to right, #ffe838, #fd57bf);
  width: ${(props) => props.half ? "50%" : "100%" };
  transform-origin: ${(props) => 
    props.start ? "right" : props.end ? "left" : "" 
  };
  transition: ${(props) => 
    props.start || props.end ? transition : null 
  }; 
  transform: ${(props) => 
    {
      if(props.isOpen){
        return props.start ? "rotate(-990deg) translateX(.8rem)" : props.end ? "rotate(-630deg) translateX(-.8rem)" : null
      }
      else return null
    }
  };
  align-self: ${props => props.end && "flex-end"};
  height: 4px;
  border-radius: .8rem;
`;


