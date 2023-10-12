import React from 'react';

type Props = {};

const WelcomePage = (props: Props) => {
	return (
		<div
			style={{
				fontSize: '25px',
				fontWeight: '700',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '50vh',
			}}>
			Welcome
		</div>
	);
};

export default WelcomePage;
