import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './css/App.css';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App