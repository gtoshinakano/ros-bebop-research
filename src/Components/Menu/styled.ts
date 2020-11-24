// #region Global Imports
import styled, {css} from "styled-components";
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
	padding: 3px 2px 6px 20px;
	a{
		color: ${props => props.theme.palette.primary.main};
		display: block;
		height:100%;
	}
	a:hover{
		color: ${props => props.theme.palette.primary.hover};
		text-decoration: none;
	}
	${props => props.active && css`
		a{
			color: ${props => props.theme.palette.primary.contrastText};
		}
	`}
`;


