import { StyledButton, StyledText } from './styles';

const Button = ({ action, darkMode }) => {
	return (
		<>
			<StyledText>{darkMode ? 'Dark Mode' : 'Light Mode'}</StyledText>
			<StyledButton onClick={action}> </StyledButton>
		</>
	);
};

export default Button;
