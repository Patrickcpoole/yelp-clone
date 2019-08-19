import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchYelp }) => {
	const [term, setTerm] = useState('');
	const [location, setLocation] = useState('');
	const [sortBy, setSortBy] = useState('best_match');

	const sortByOptions = {
		'Best Match': 'best_match',
		'Highest Rated': 'rating',
		'Most Reviewed': 'review_count'
	};

	const getSortByClass = sortByOption => {
		if (sortBy == sortByOption) {
			return 'active';
		}
		return '';
	};

	const handleSortByChange = (sortByOption, event) => {
		setSortBy(sortByOption);

		searchYelp(term, location, sortBy);
		event.preventDefault();
	};

	const handleTermChange = event => {
		setTerm(event.target.value);
	};

	const handleLocationChange = event => {
		setLocation(event.target.value);
	};

	const handleSearch = event => {
		searchYelp(term, location, sortBy);
	};

	const renderSortByOptions = () => {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return (
				<li
					className={getSortByClass(sortByOptionValue)}
					key={sortByOptionValue}
					onClick={handleSortByChange.bind(this, sortByOptionValue)}
				>
					{sortByOption}
				</li>
			);
		});
	};

	const handleKeyUp = event => {
		if (event.keyCode === 13) {
			console.log('Enter key has been pressed');
			handleSearch();
		}
	};

	return (
		<div className='SearchBar'>
			<div className='SearchBar-sort-options'>
				<ul>{renderSortByOptions()}</ul>
			</div>
			<div className='SearchBar-fields'>
				<input
					placeholder='Search Businesses'
					onKeyUp={handleKeyUp}
					onChange={handleTermChange}
				/>
				<input
					placeholder='Where?'
					onKeyUp={handleKeyUp}
					onChange={handleLocationChange}
				/>
			</div>
			<div className='SearchBar-submit'>
				<a onClick={handleSearch}>Lets Go</a>
			</div>
		</div>
	);
};

export default SearchBar;
