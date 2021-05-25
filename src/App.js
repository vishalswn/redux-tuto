import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainers';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
     {/* <h1>App Component</h1> */}
     <User data={{name: "vishal sharma",age:26}} />
     <HeaderContainer/>
     <HomeContainer/> 
    </div>
  );
}

export default App;
