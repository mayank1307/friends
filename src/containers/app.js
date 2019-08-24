import React, {Component} from 'react';
import Cardlist from '../components/cardlist'
import SearchBox from '../components/search';
import './app.css';
import Scroll from '../components/scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            fans : [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({fans:users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }
    render(){
        const {fans,searchfield}=this.state;
        const filterfans =fans.filter(fans =>{
            return fans.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(fans.length===0){
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className='tc'>
                <h1>Friends List</h1>
                <SearchBox searchchange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist fans={filterfans}/>
                </Scroll>
            </div>
        );
        }
    }
}
export default App;