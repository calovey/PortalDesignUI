import { BrowserRouter as Router, Route, Switch, useLocation, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Detail from './components/Detail';
import CardGrid from './components/CardGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./img/10340256_13077.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faComment, faReceipt, faUserGear, faEarthAmericas, faTruckFast, faQuestion, faBoxOpen, faShop, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
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
          <Routes>
            <Route exact path='/' component={Homepage} />
            <Route path='/Detail' component={Detail} />
          </Routes>
          <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "calc(90% - 16px)", overflowY: "scroll" }}>
            <div className="container mt-4 mb-4">
              <CardGrid
                cards={[
                  {
                    title: 'Account',
                    text: 'Invoices and policies',
                    icon: faReceipt,
                    path: '/BlankPage',
                  },
                  {
                    title: 'Support',
                    text: 'Contact customer service',
                    icon: faComment,
                    path: '/',
                  },
                  {
                    title: 'User Settings',
                    text: 'Account info',
                    icon: faUserGear,
                    path: '/',
                  },
                  {
                    title: 'Product & Services',
                    text: 'Purchasing products and services',
                    icon: faEarthAmericas,
                    path: '/',
                  },
                  {
                    title: 'Orders',
                    text: 'Order tracking',
                    icon: faTruckFast,
                    path: '/',
                  },
                  {
                    title: 'Help',
                    text: 'Need more help...',
                    icon: faQuestion,
                    path: '/',
                  },
                  {
                    title: 'Item',
                    text: '',
                    icon: faBoxOpen,
                    path: '/',
                  },
                  {
                    title: 'Shopes',
                    text: 'Include all stores',
                    icon: faShop,
                    path: '/',
                  },
                  {
                    title: 'Locations',
                    text: 'Find nearest store',
                    icon: faLocationDot,
                    path: '/',
                  }
                ]}
                cardDisabled={false}
              />
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
