import React from 'react';
import { Link } from 'react-router-dom';

import { ICard } from '../../interfaces/ICard';

import Spinner from '../UI/Spinner';
import styles from './CardsContainer.module.scss';

interface CardsProps {
	cards: ICard[];
	isLoading: boolean;
	error: string;
}

const CardsContainer = ({ cards, isLoading, error }: CardsProps) => {
	return (
		<div className={styles.container}>
			{isLoading && <Spinner />}
			{!isLoading &&
				!error &&
				cards?.map((card) => {
					return (
						<React.Fragment key={card.id}>
							<div className={styles.card}>
								<Link to={`/card/${card.id}`} className={styles.card__link}>
									<img
										src={card.url}
										alt={card.title}
										className={styles.card__image}
									/>
									<h6 className={styles.card__title}>{card.title}</h6>
									<p className={styles.card__descr}>{card.company}</p>
									<p className={styles.card__descr}>Price: {card.price}</p>
								</Link>
							</div>
						</React.Fragment>
					);
				})}
		</div>
	);
};

export default CardsContainer;
