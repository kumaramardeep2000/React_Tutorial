import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functioncompo from './components/Functioncompo';
import Classcompo from './components/Classcompo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Props/Democomponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



    {/* <App />
    <Functioncompo />
    <Classcompo></Classcompo> */}
    {/* <Header></Header> 
    <Footer></Footer> */}
    <Products />
    

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();