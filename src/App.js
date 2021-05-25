import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainers';

function App() {
  return (
    <div className="App">
     {/* <h1>App Component</h1> */}
     <User data={{name: "vishal sharma",age:26}} />
     <HomeContainer/> 
    </div>
  );
}

export default App;
