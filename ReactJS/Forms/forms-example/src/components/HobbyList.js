import React from 'react';

class HobbyList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hobbies: [],
            selectedHobbie: null
        }

        this.onHobbieClick = this.onHobbieClick.bind(this);
    }

    onHobbieClick(e) {
        this.setState({
            selectedHobbie: e.target.textContent
        });
    }

    componentDidMount() {
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    hobbies: Object.values(res)
                })
            });
    }

    render() {
        return (
            <>
                <h2>{this.props.children}</h2>
                <ul>
                    {this.state.hobbies.map(x => <li key={x._id} onClick={this.onHobbieClick}>{x.name}</li>)}
                </ul>
            </>
        )
    }
}

export default HobbyList;