import { ICard } from '../../interfaces/ICard';
import { useParams } from 'react-router-dom';
import styles from './CardItem.module.scss';

interface CardProps {
	cards: ICard[];
}

const CardItem = ({ cards }: CardProps) => {
	const { cardId } = useParams();
	const card = cards.find((card: ICard) => card.id === Number(cardId));
	return (
		<div className={styles.card}>
			<img src={card?.url} alt={card?.title} className={styles.card__img} />
			<h6 className={styles.card__title}>{card?.title}</h6>
			<p className={styles.card__descr}>{card?.company}</p>
			<p className={styles.card__descr}>Price: {card?.price}</p>
		</div>
	);
};

export default CardItem;
