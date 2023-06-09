import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: ${props => (props.darkMode ? ' #20222f' : 'white')};
	width: 1440px;
	height: 800px;
`;

const StyledCard = styled.div`
	background-color: ${props => (props.darkMode ? '#252b42' : 'white')};
	width: 255px;
	height: 216px;
`;

const StyledUser = styled.span`
	color: ${props => (props.darkMode ? '#8c98c6' : '##252b42')};
	font-size: 12px;
	font-weight: 700;
`;

const StyledNumber = styled.span`
	color: ${props => (props.darkMode ? 'white' : '#252b42')};
	font-size: 56px;
	line-height: 48px;
	letter-spacing: -2px;
	font-weight: 700;
`;

const StyledCategory = styled.span`
	color: ${props => (props.darkMode ? 'white' : '#8c98c6')};
	font-size: 12px;
	letter-spacing: 5px;
`;

const StyledArrow = styled.img``;

const StyledToday = styled.span`
	color: #1eb589;
	font-size: 12px;
	font-weight: 700;
`;

export {
	StyledArrow,
	StyledCard,
	StyledCategory,
	StyledContainer,
	StyledNumber,
	StyledToday,
	StyledUser
};
