import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    constructor(props) { //construtor
        super(props)
        /*this.state = {
            username : '',
        } */
        this.state = {
            people: [], //criando estado vazio
        }
        this.getPeople = this.getPeople.bind(this);

    }
    getPeople() {

     return axios.get("https://swapi.co/people/", { crossdomain: true },
     {headers: {'Access-Control-Allow-Origin': '*'}})
            .then((response) => {
                console.log(response.data.results);
                this.setState({ people: response.data.results })
            })
    }
    componentDidMount() { //request na api   
        this.getPeople()
    }
    render() {

        return (
            <div className="profile"></div>
        );
    }
}

export default Profile