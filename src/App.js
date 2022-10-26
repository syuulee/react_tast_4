import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Center from './pages/Center';
import './css/App.css';
<<<<<<< HEAD

=======
>>>>>>> b4f4a10213be1e892345664a6fb07c7259b70d7c

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
