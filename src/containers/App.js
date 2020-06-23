import React, {Component} from "react"; 
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './app.css'; 

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [] , 
            searchfield: ''
        }
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response =>response.json())
        .then( users =>this.setState({robots: users}))}
    withEveryChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const { robots, searchfield } = this.state; 
        const filtrador = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
            return <h1 className= "tc">Loading...</h1>
        }else{
            return(
                <div className= "tc">
                    <h1 className= "f1 dim">RoboFriends</h1>
                    <Search searchChange = {this.withEveryChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filtrador}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}
export default App; 
