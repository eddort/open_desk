import React, { PropTypes, Component } from 'react'

export default class User extends Component {
	
	constructor(props) {
		super(props);
		this.setValue = (e) => {
			this.props.setName(e.target.value);
		};
	}
	
	render() {
		console.log(this.props)
		const { name }  = this.props
		return <div>
			<p>
				Привет,
				
					{name}
				
				<input type="text" onInput={ this.setValue }/>
			</p>
		</div>
	}
}