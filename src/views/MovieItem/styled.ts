import styled from 'styled-components';

export const ContentCard = styled.div`
	background: ${props => props.theme.colors.white};
	box-shadow: 4px 4px 30px rgba(206, 206, 206, 0.25);
	border-radius: ${props => props.theme.radius.regular};
	box-shadow: '0px 3px 12px -1px rgba(28, 52, 84, 0.13), 0px 2px 4px -1px rgba(28, 55, 90, 0.08);';
	margin: 5%;
	padding: ${props => props.theme.gutters.regular};
`;

export const ItemTitle = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: auto 1fr;
	text-align: center;
	font-size: ${props => props.theme.gutters.regularBig};
	margin-bottom: 20px;
	svg {
		cursor: pointer;
	}
`;

export const MovieDetailWrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr 1fr;
	img {
		width: 70%;
		height: 100%;
		object-fit: contain;
		justify-self: center;
	}
`;

export const MovieInfo = styled.div`
	text-align: left;
`;

export const Item = styled.div`
	margin: ${props => props.theme.gutters.small};
`;
