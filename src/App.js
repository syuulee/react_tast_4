import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Center from './pages/Center';
import './css/App.css';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/center' element={<Center />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
