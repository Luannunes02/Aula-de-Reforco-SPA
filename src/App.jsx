import styles from "./styles/Home.module.css"
import Header from './components/sections/Header';
import About from './components/sections/About';
import Service from './components/sections/Service';
import Contact from './components/sections/Contact';
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
      <a href="https://wa.me/5561999088328?text=Ol%C3%A1+Mayra%2C+estou+querendo+aula+de+refor%C3%A7o+para+meu+filho%28a%29%21" className={`${styles['float']}`} target="_blank">
        <i className={`fa fa-whatsapp ${styles['my-float']}`} id='my-float'></i>
      </a>
      <Header />       
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
