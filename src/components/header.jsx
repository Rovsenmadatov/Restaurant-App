import { BsBasket3 } from 'react-icons/bs';
import Container from './Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow">
      <Container designs={'flex justify-between items-center'}>
        <Link to={'/'} className="text-red-500 font-[900] text-2xl font-mono">
          Thunksepeti
        </Link>

        <div className="flex items-center gap-4">
          <button className="border border-red-500 py-1 px-3 rounded text-red-500 transition hover:bg-red-500 hover:text-white">
            Giriş Yap
          </button>
          <button className="bg-red-500 text-white py-1 px-3 rounded transition hover:brightness-75">
            Kayıt Ol
          </button>

          <Link
            to={'/cart'}
            className="hover:bg-red-500 hover:bg-opacity-15 rounded-full transition p-3"
          >
            <BsBasket3 className="text-red-500 text-xl" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;