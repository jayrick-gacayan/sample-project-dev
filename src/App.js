import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavbar from './component/navbar/TopNavBar';
import NavbarTabs from './component/content/NavbarTabs';

const App = () => {
  return (
    <>
      <TopNavbar />
      <Container fluid
        style={{
          backgroundColor: "white",
          position: "relative"
        }}>
        <Container 
          fluid
          style={{
            backgroundColor: "white"
          }}>
          <NavbarTabs />
        </Container>
        
      </Container>
      
    </>
  );
}

export default App;
