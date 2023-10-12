import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__menu}>
				<ul className={styles.header__menu_list}>
					<li className={styles.header__menu_item}>
						<NavLink
							className={styles.header__menu_link}
							end
							style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
							to='/'>
							Home
						</NavLink>
					</li>
					<li className={styles.header__menu_item}>
						<NavLink
							className={styles.header__menu_link}
							end
							style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
							to='/cards'>
							Cards
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
