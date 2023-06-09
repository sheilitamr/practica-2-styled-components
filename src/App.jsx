import { useState } from 'react';
import Button from './components/button/Button';
import Card from './components/card/Card';
import { StyledContainer } from './components/card/styles';
import { BIG_CARDS } from './constants/card-data';

const App = () => {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<StyledContainer darkMode={darkMode}>
			<Button darkMode={darkMode} action={() => setDarkMode(!darkMode)} />
			{BIG_CARDS.map(card => (
				<Card
					key={card.id}
					icon={card.icon}
					user={card.user}
					number={card.number}
					category={card.category}
					positive={card.positive}
					numberToday={card.numberToday}
					textToday={card.textToday}
					darkMode={darkMode}
				/>
			))}
		</StyledContainer>
	);
};

export default App;
