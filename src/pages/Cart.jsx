import Container from '../components/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/actions/basketActions';
import Loader from './../components/Loader';
import Error from './../components/Error';
import CartItem from '../components/Cartitem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div>
        {cart.isLoading ? (
          <Loader />
        ) : cart.error ? (
          <Error message={cart.error} />
        ) : cart.data.length === 0 ? (
          <p className="flex flex-col items-center gap-3">
            Sepete herhangi bir ürün yok{' '}
            <Link
              to={'/'}
              className="border p-2 shadow rounded hover:bg-gray-100"
            >
              Ürün Ekle
            </Link>
          </p>
        ) : (
          cart.data.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
    </Container>
  );
};

export default Cart;