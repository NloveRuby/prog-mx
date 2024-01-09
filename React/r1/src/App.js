import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './App.css';
import './App.css';

function App() {
  const hername= "Malak";
  return (
  
    <>
    <Header />
    <div className="App">
      {/* all html tags shall be in single fragment */}
      {/* rafc = React arrow function component */}
      {/* HTML elements shall be inside render function */}
      {/* all tags shall be closed by ending slash </> */}
      {/* add the class using ClassName, instead of class used in HTML and css */}
      {/* you can use div or any other html tags instead of the fragment */}
      {/* you can use js above return function and use it in the return function using {} for code */}
      {/* use  */}
      <>
        {/* <h1>Hello Nasr</h1>
    <h1>Hello Omar</h1>
    <h1 className='active'>Hello Mona</h1>
    <h1>her name is {hername}</h1> */}
      <Footer />
      </>
    </div>
    
    </>
  );
}

export default App;
