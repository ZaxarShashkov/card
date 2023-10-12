import React from 'react';
import styles from './CardItem.module.scss';
import { ICard } from '../../interfaces/ICard';
import { useParams } from 'react-router-dom';

interface cardProps {
	card: ICard | any;
}

const CardItem = ({ card }: cardProps) => {
	const { id } = useParams();
	console.log(id, 'id');
	return (
		<div className={styles.card}>
			<img src='' alt='' className={styles.card__image} />
			<h6 className={styles.card__title}>{card.title}</h6>
			<p className={styles.card__descr}>{card.company}</p>
			<p className={styles.card__price}>{card.price}</p>
		</div>
	);
};

export default CardItem;
