import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import CustomerDetail from './components/CustomerDetail';
import CardGrid from './components/CardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./img/15628909_5654813.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div style={{ position: "relative" ,minHeight: "100vh"}}>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100%",
        width: "100%",
        position: "fixed"
      }}>
        <Router>
          <NavBar style={{ backgroundColor: "transparent", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }} />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/CustomerDetail' component={CustomerDetail} />
            <Route path='/CardGrid' component={CardGrid} />
          </Switch>
          <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "calc(50% - 56px)" }}>
            <div className="container mt-4 mb-4">
              <CardGrid
                cards={[
                  {
                    title: 'Card 1',
                    text: 'This is card 1',
                    image: 'https://via.placeholder.com/150',
                    icon: faCoffee,
                  },
                  {
                    title: 'Card 2',
                    text: 'This is card 2',
                    image: 'https://via.placeholder.com/150',
                    icon: faHeart,
                  },
                  {
                    title: 'Card 2',
                    text: 'This is card 2',
                    image: 'https://via.placeholder.com/150',
                  },
                  {
                    title: 'Card 2',
                    text: 'This is card 2',
                    image: 'https://via.placeholder.com/150',
                  },
                  {
                    title: 'Card 2',
                    text: 'This is card 2',
                    image: 'https://via.placeholder.com/150',
                  },
                  {
                    title: 'Card 2',
                    text: 'This is card 2',
                    image: 'https://via.placeholder.com/150',
                  },
                  {
                    title: 'Card 2',
                    text: 'This is card 2',
                    image: 'https://via.placeholder.com/150',
                  }
                  // add more cards here
                ]}
              />
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
