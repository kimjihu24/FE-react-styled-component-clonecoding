// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

function App() {
  return( 
  <>
  <Header/>
  <Banner/>
  <Card/>
  <Footer/>
  </>
  );
}

export default App;
