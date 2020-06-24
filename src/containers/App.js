import React, {Component} from "react"; 
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions'; 
import './app.css'; 


const mapStateToProps =(state)=>{
    return {
        searchfield: state.searchfield 
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {withEveryChange: (event)=> dispatch(setSearchField(event.target.value))}
}
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: []
        }
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response =>response.json())
        .then( users =>this.setState({robots: users}))}

    render(){
        const { robots } = this.state; 
        const { searchfield, withEveryChange } = this.props; 
        const filtrador = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
            return <h1 className= "tc">Loading...</h1>
        }else{
            return(
                <div className= "tc">
                    <h1 className= "f1 dim">RoboFriends</h1>
                    <Search searchChange = { withEveryChange }/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = { filtrador }/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App); 
