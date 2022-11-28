import './App.css';
import Header from './components/common/header/header';
import Sidebar from './components/common/sidebar/sidebar';

function App() {
  const sidebarTab = [
    {
      tab: "Home"
    },
    {
      tab: "City"
    },
  ];
  return (
    <div className="App">
      <Sidebar sidebarTab={sidebarTab}/>
     <Header heading={"My Favorite cities"}/>
    </div>
  );
}

export default App;
