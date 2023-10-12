import React, { useEffect } from 'react';
import styles from './CardsContainer.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/redux';
import { fetchCards } from '../../redux/Slices/CardsSlice';
import CardItem from '../CardItem/CardItem';

import { BrowserRouter as Router, Route, Routes, Link, useParams, NavLink } from 'react-router-dom';
import { ICard } from '../../interfaces/ICard';

interface CardsProps {
	cards: ICard[];
	isLoading: boolean;
	error: string;
}

const CardsContainer = ({ cards, isLoading, error }: CardsProps) => {
	return (
		<div className={styles.container}>
			{!isLoading &&
				!error &&
				cards?.map((card) => {
					return (
						<React.Fragment key={card.id}>
							<div className={styles.card}>
								<Link to={`/card/${card.id}`}>
									<img src='' alt='' className={styles.card__image} />
									<h6 className={styles.card__title}>{card.title}</h6>
									<p className={styles.card__descr}>{card.company}</p>
									<p className={styles.card__price}>{card.price}</p>
								</Link>
							</div>
						</React.Fragment>
					);
				})}
		</div>
	);
};

export default CardsContainer;
