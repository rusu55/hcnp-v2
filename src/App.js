import {reviews} from './data/reviews';

import Nav from './components/page-parts/nav/Nav';
import Footer from './components/page-parts/footer/Footer';

import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Services from './components/pages/services/Services';
import Contact from './components/pages/contact/Contact';
import Employment from './components/pages/employment/Employment';
import Testimonials from './components/pages/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Nav />      
      <Home />
      <About />
      <Services />
      <Testimonials reviews={reviews}/>
      <Employment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
