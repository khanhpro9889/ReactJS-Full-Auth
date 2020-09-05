import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Boxed from './components/Boxed';
import Routes from './routers';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
  faStar,
  faPen,
  faAngleUp,
  faAngleDown,
  faBars,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faEyeSlash,
  faEye,
  faTimes,
  faDumbbell,
  faSearch,
  faHome,
  faSignOutAlt,
  faSignInAlt,
  faMedal,
  faPlusCircle,
  faListOl,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'

library.add(
  faPen,
  fasStar,
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
  faStar,
  faAngleUp,
  faBars,
  faChevronRight,
  faAngleDown,
  faChevronDown,
  faChevronUp,
  faEyeSlash,
  faEye,
  faTimes,
  faDumbbell,
  faSearch,
  faHome,
  faSignOutAlt,
  faSignInAlt,
  faMedal,
  faPlusCircle,
  faListOl,
  fab
)

function App() {
  return (
    <Router>
      <Wrapper>
        <NavBar />
        <Routes />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
