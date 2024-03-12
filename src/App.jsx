import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/Global.styled';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useModal } from './context/modal';

export default function App() {
  const { showModal } = useModal();
  return (
    <div className='App'>
      <GlobalStyles />

      <Navbar />
      <Outlet />
      <Footer />

      {showModal ? <Modal /> : null}
    </div>
  );
}
