import './App.css';
import Cards from "./components/Cards";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center pt-5">
      
    <Cards 
    title="Javascript" 
    src="m1.jpg"
    prag="Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites."
    btn="Brendan Eich"
    />
    <Cards 
    title="ReactJS" 
    src="m2.jpg"
    prag="React is a library for building composable user interfaces. It encourages the creation of reusable UI components that present data that changes over time. React is a powerful JavaScript UI library for creating modern applications."
    btn="Jordan Walke"/>
    <Cards 
    title="NodeJS" 
    src="m3.jpg"
    prag="Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.
    "
    btn="Ryan Dahl"/>
    </div>
    </>
  );

  
}

export default App;
