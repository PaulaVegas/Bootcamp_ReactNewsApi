import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Form from './views/Form';
import ListNews from './views/ListNews';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<ListNews />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;