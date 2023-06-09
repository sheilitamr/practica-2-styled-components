import {
	StyledCard,
	StyledCategory,
	StyledNumber,
	StyledToday,
	StyledUser
} from './styles';

const Card = ({
	icon,
	alt,
	user,
	number,
	category,
	positive,
	numberToday,
	textToday,
	darkMode
}) => {
	return (
		<StyledCard darkMode={darkMode}>
			<img src={icon} alt={alt} />
			<StyledUser darkMode={darkMode}>{user}</StyledUser>
			<StyledNumber darkMode={darkMode}>{number}</StyledNumber>
			<StyledCategory darkMode={darkMode}>{category}</StyledCategory>
			<img src={positive ? '/icon-up.svg' : '/icon-down.svg'} />
			<StyledToday>
				{numberToday} {textToday}
			</StyledToday>
		</StyledCard>
	);
};
export default Card;
