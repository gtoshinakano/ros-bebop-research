import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const CustomButton = styled(Button)`
  background-color: ${props => props.theme.palette.sideMenu.languageBar};
  border: 0;
`

export {CustomButton}