import React, { useEffect } from 'react';
import styles from './CardsContainer.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/redux';
import { fetchCards } from '../../redux/Slices/CardsSlice';
import CardItem from '../CardItem/CardItem';

import { BrowserRouter as Router, Route, Routes, Link, useParams, NavLink } from 'react-router-dom';

const CardsContainer = () => {
	const dispatch = useAppDispatch();
	const { cards, isLoading, error } = useAppSelector((state) => state.cardReducer);

	useEffect(() => {
		dispatch(fetchCards());
	}, []);
	return (
		<Router>
			<div className={styles.container}>
				{!isLoading &&
					!error &&
					cards?.map((card) => {
						return (
							<React.Fragment key={card.id}>
								<Link to={`/card/${card.id}`} key={card.id}>
									<CardItem card={card} key={card.id} />
								</Link>
								<Routes>
									<Route
										path={`/card/${card.id}`}
										element={<CardItem card={card} />}
									/>
								</Routes>
							</React.Fragment>
						);
					})}
			</div>
		</Router>
	);
};

export default CardsContainer;
