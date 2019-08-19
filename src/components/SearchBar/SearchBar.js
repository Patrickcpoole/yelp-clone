import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};

		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};
	}

	getSortByClass(sortByOption) {
		if (this.state.sortBy == sortByOption) {
			return 'active';
		}
		return '';
	}

	handleSortByChange(sortByOption, event) {
		this.setState({ sortBy: sortByOption });
		console.log('changed');
		this.props.searchYelp(
			this.state.term,
			this.state.location,
			this.state.sortBy
		);

		event.preventDefault();
	}

	handleTermChange(event) {
		this.setState({ term: event.target.value });
	}

	handleLocationChange(event) {
		this.setState({ location: event.target.value });
	}

	handleSearch(event) {
		this.props.searchYelp(
			this.state.term,
			this.state.location,
			this.state.sortBy
		);
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return (
				<li
					className={this.getSortByClass(sortByOptionValue)}
					key={sortByOptionValue}
					onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
				>
					{sortByOption}
				</li>
			);
		});
	}

	handleKeyUp(event) {
		if (event.keyCode === 13) {
			console.log('Enter key has been pressed');
			this.handleSearch();
		}
	}

	render() {
		return (
			<div className='SearchBar'>
				<div className='SearchBar-sort-options'>
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className='SearchBar-fields'>
					<input
						placeholder='Search Businesses'
						onKeyUp={this.handleKeyUp}
						onChange={this.handleTermChange}
					/>
					<input
						placeholder='Where?'
						onKeyUp={this.handleKeyUp}
						onChange={this.handleLocationChange}
					/>
				</div>
				<div className='SearchBar-submit'>
					<a onClick={this.handleSearch}>Lets Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
