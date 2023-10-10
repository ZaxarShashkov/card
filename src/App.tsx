import React from 'react';
import styles from './styles/App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardsContainer from './components/CardsContainer/CardsContainer';
function App() {
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				<CardsContainer />
			</main>
			<Footer />
		</div>
	);
}

export default App;
