import { Header } from './components/Header';
import { Footer } from './components/Footer';


import './App.css';
import './App.css';

function App() {
  // js code here
  let count = 0;
  console.log(count);
  function handleAdd(){
    count+=1;
  }
  const hername= "Malak";

  return (
    
    // <>
    // <Header />
    // <div className="App">
    //   {/* all html tags shall be in single fragment */}
    //   {/* rafc = React arrow function component */}
    //   {/* HTML elements shall be inside return function */}
    //   {/* all tags shall be closed by ending slash </> */}
    //   {/* add the class using ClassName, instead of class used in HTML and css */}
    //   {/* you can use div or any other html tags instead of the fragment */}
    //   {/* you can use js above return function and use it in the return function using {} for code */}
    //   {/* use  */}
    //   <>
    //     {/* <h1>Hello Nasr</h1>
    // <h1>Hello Omar</h1>
    // <h1 className='active'>Hello Mona</h1>
    // <h1>her name is {hername}</h1> */}
    //   <Footer />
    //   </>
    // </div>
    
    // </>
    // <h1>Hello {hername}</h1>
    <div>
      <p>{count}</p>
      {/* create function as above and gte it's name in the curley brackets or create an arrow function as below */}
      <button onClick={handleAdd} className="add">Add</button>
      <button onClick={()=>count=+1} className="add">Add</button>
      <button className="Sub">Subtract</button>
    </div>
  );
}

export default App;
