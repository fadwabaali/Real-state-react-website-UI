import './App.css';
import Banner from './components/Banner';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PopularProperty from './components/PopularProperty';
import Valuesec from './components/Valuesec';

function App() {
  return (
    <div className="App">
      <header className='bg-[#131313] w-full ' >
        <Navbar /> 
        <Home/>
      </header>
      <main>
        <Companies />
        <PopularProperty />
        <Valuesec />
        <Contact />
        <Banner  />
      </main>
      <Footer />
    </div>
  );
}

export default App;
