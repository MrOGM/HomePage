import './App.css';
import './NavBar.css';
import NavBar from './NavBar';
import MainNews from './MainNews';
import SideNews from './SideNews';
import ArticlesCards from './ArticlesCards'
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='MainSideNews-C'>
        <div className='doubleF'> <MainNews/></div>
        <div className='oneF'> <SideNews /> </div>
      </div>

    <div className='articles-S'>
      <ArticlesCards />
    </div>

    </div>
  );
}

export default App;
