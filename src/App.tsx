import React, { Suspense, useEffect } from 'react';
import styles from './styles/App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { BrowserRouter as Router, Route, Routes, Link, useParams, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/Hooks/redux';
import { fetchCards } from './redux/Slices/CardsSlice';
import CardItem from './components/CardItem/CardItem';

function App() {
	const dispatch = useAppDispatch();
	const { cards, isLoading, error } = useAppSelector((state) => state.cardReducer);

	useEffect(() => {
		dispatch(fetchCards());
	}, []);
	return (
		<Router>
			<div className={styles.App}>
				<Header />
				<main className={styles.main}>
					{/* <Suspense fallback={<Spinner/>}> */}
					<Routes>
						<Route
							path='/cards'
							element={
								<CardsContainer cards={cards} isLoading={isLoading} error={error} />
							}
						/>
						<Route path='/card/:cardId' element={<CardItem cards={cards} />} />
						{/* <Route path='/comics/:comicId' element={<SingleComicPage />} /> */}
					</Routes>
					{/* </Suspense> */}
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
