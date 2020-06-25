import React from 'react';
import './App.css';
import Header from "../Header";
import Footer from "../Footer";
import MainBody from "../MainBody";
import Layout from "../Layout";
import TestUseReducer from "../TestUseReducer";

function App() {
  return (
    <Layout>
      <Header/>
      <MainBody />
      <TestUseReducer/>
      <Footer/>
    </Layout>
  );
}

export default App;
