// #region Global Imports
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup"
// #endregion Global Imports

export const Container = styled(ListGroup)`
		background-color: ${props => props.theme.palette.sideMenu.backgroundColor};
`;

export const Item = styled(ListGroup.Item).attrs((props) => ({
	header: props.header
}))`
		color: ${props => props.theme.palette.common.color};
		background-color: ${props => props.theme.palette.sideMenu.backgroundColor};
		border: 0;
		font-weight: ${props => props.header && 700}

`;


