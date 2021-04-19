import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from'../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			cats: [],
			searchfield: ''
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ cats: users}));
		}
	changeSearch = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const { cats, searchfield } = this.state;
		const filterCats = cats.filter(cat =>{
			return cat.name.toLowerCase().startsWith(searchfield.toLowerCase())
		})
			return !cats.length ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>Cat Friends</h1>
					<Searchbox SearchChange={this.changeSearch}/>
					<Scroll>
						<ErrorBoundry>
							<Cardlist cats={filterCats}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}
export default App;