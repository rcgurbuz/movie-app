import styled from 'styled-components';

export const StyledHeader = styled.div`
	background-color: ${props => props.theme.colors.primary};
	height: auto;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: auto;
	gap: 20px;
	align-items: center;
	padding: 20px;

	.css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
		padding-left: 10px;
	}
	.css-1nrlq1o-MuiFormControl-root {
		width: 100%;
	}
	.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
		display: none;
	}
	.css-sghohy-MuiButtonBase-root-MuiButton-root {
		background-color: ${props => props.theme.colors.black};
	}
	.css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
		background-color: ${props => props.theme.colors.black};
	}
	@media (max-width: 992px) {
		grid-auto-flow: row;
	}
`;

export const Wrapper = styled.div`
	display: grid;
	margin-left: 0.5px;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 6em;
	justify-content: center;
	padding: ${props => props.theme.gutters.big};
	margin-bottom: 100px;
	@media (max-width: 767px) {
		grid-template-columns: repeat(1, 1fr);
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1400px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const MovieItem = styled.div`
	margin: 20px;
	img {
		width: 100%;
		height: 85%;
		object-fit: contain;
		background: ${props => props.theme.colors.white};
	}
`;

export const MovieItemText = styled.div`
	color: ${props => props.theme.colors.white};
	margin: 5px 0;
`;

export const NotFound = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 24px;
	text-align: center;
	color: white;
`;

export const PaginationWrapper = styled.div`
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		margin: ${props => props.theme.gutters.big} auto;
		padding-left: 0;
		cursor: pointer;
		color: ${props => props.theme.colors.textColor};
	}
	li {
		font-size: ${props => props.theme.fontSizes.regular};
		margin-right: ${props => props.theme.gutters.regularBig};
		font-weight: ${props => props.theme.fontWeights.semiBold};
		@media (max-width: 576px) {
			margin-right: ${props => props.theme.gutters.small};
		}
	}
	.activePage {
		color: ${props => props.theme.colors.white};
		background-color: ${props => props.theme.colors.primary};
		padding: ${props => props.theme.gutters.small};
		border-radius: ${props => props.theme.radius.small};
	}
	.css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
		background-color: ${props => props.theme.colors.white};
		color: ${props => props.theme.colors.primary};
	}
`;
