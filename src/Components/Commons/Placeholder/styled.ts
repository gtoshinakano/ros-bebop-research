import styled, {keyframes} from 'styled-components'

const Container = styled.div`
  width: 100%;
  
`

const animate = keyframes`
    from{
        background-position: -400px 0
    }
    to{
        background-position: 400px 0
    }
`

const Rect = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animate};
  animation-timing-function: linear;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  height: ${props => props.height + "px"};
  position: relative;
  background-size: 800px;
`

export {Container, Rect}