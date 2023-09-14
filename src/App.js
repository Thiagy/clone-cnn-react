import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Main from './components/Main';
import Footer from './components/Footer';


export default function App() {

  const[closeSpinner, setCloseSpinner]=useState(true)
  return (
    <>
      <Header/>
      <Spinner closeSpinner={closeSpinner}/>
      <Main closeSpinner={closeSpinner} setCloseSpinner={setCloseSpinner}/>
      <Footer closeSpinner={closeSpinner}/>
    </>
  );
}


