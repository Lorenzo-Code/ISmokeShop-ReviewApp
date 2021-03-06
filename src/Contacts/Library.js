
import React, {Component} from 'react';
import Contacts from './Contacts';

class Library extends Component {
render() {
    return (
        <Contacts contacts={this.state.contacts} />
    )
}

state = {
    contacts: []
};

componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
        })
        .catch(console.log)
}
}
export default Library;
