import styled from 'styled-components'
import {breakpoint} from '@Definitions/Styled'

const GlobalContainer = styled.div`
  ${breakpoint.xs} {
    margin:15px 10px;
  }
  ${breakpoint.sm} {
    margin:15px 10px;
  }
  ${breakpoint.md} {
    margin:15px auto;
    max-width:680px;
  }
  ${breakpoint.lg} {
    margin:15px auto;
    max-width:680px;
  }
  ${breakpoint.xl} {
    margin:15px auto;
    max-width:680px;
  }

`

export {GlobalContainer}