// #region Global Imports
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup"
// #endregion Global Imports

export const Container = styled(ListGroup)`
		background-color: ${props => props.theme.palette.sideMenu.backgroundColor};
`;

type ItemProps = {
  header: boolean | false;
}

export const Item = styled(ListGroup.Item)<ItemProps>`
		color: ${props => props.theme.palette.common.color};
		background-color: ${props => props.theme.palette.sideMenu.backgroundColor};
		border: 0;
		font-weight: ${props => props.header ? 700 : 200};
		font-size: ${props => props.header ? "1.1em" : "1em"};
		padding: 4px 20px;

`;


