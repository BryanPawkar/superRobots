import React, {Component} from "react"; 
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import KittyList from '../components/KittyList'; 
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots, requestKittys } from '../actions'; 
import './app.css'; 


const mapStateToProps =(state)=>{
    return {
        searchfield: state.searchToys.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
        kittys: state.requestKittys.kittys,
        isPending: state.requestKittys.kitty,
        error: state.requestKittys.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        withEveryChange: (event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()),
        onRequestKittys: () => dispatch(requestKittys())
    }
}
class App extends Component {
    
    componentDidMount(){
        this.props.onRequestRobots();
        this.props.onRequestKittys(); 
    }

    render(){
        const { searchfield, withEveryChange, robots, kittys, isPending } = this.props; 
        const filtrador = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        const kittyFiltrador = kittys.filter(kitty =>{
            return kitty.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (isPending){
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
                    <h1 className= "f1 pa5 kitty" >Kitty Friends</h1>
                    <Scroll>
                        <ErrorBoundry>
                            <KittyList kittys = { kittyFiltrador} />
                        </ErrorBoundry>
                    </Scroll>    
                </div>
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App); 
