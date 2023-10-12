import React, { useEffect } from 'react';
import styles from './CardItem.module.scss';
import { ICard } from '../../interfaces/ICard';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks/redux';
import { fetchCards } from '../../redux/Slices/CardsSlice';

interface CardProps {
	cards: ICard[] | any;
}

const CardItem = ({ cards }: CardProps) => {
	const { cardId } = useParams();
	const card = cards.find((card: any) => card.id == cardId);
	return (
		<div className={styles.card}>
			<img src='' alt='' className={styles.cardId} />
			<h6 className={styles.card__title}>{card?.title}</h6>
			<p className={styles.card__descr}>{card?.company}</p>
			<p className={styles.card__price}>{card?.price}</p>
		</div>
	);
};

export default CardItem;
