import React from 'react';
import './Business.css';

const Business = ({ business }) => {
	const {
		url,
		imageSrc,
		name,
		address,
		city,
		state,
		zipCode,
		category,
		reviewCount,
		rating
	} = business;

	return (
		<div className='Business'>
			<div className='image-container'>
				<a target='_blank' href={url}>
					<img src={imageSrc} alt='' />
				</a>
			</div>
			<h2>{name}</h2>
			<div className='Business-information'>
				<div className='Business-address'>
					<a
						target='_blank'
						href={`https://www.google.com/maps/search/?api=1&query=${name}%2C%20C${address}%20C${city}%20C${state}%20C${zipCode}`}
					>
						<p>
							{address}
							<br />
							{city}
							<br />
							{`${state} ${zipCode}`}
						</p>
					</a>
				</div>
				<div className='Business-reviews'>
					<h3>{category.toUpperCase()}</h3>
					<h3 className='rating'>{`${rating} stars`}</h3>
					<p>{`${reviewCount} reviews`}</p>
				</div>
			</div>
		</div>
	);
};

export default Business;
