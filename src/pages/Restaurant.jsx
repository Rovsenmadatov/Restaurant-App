import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { getProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Loader from './../components/Loader';
import ProductCard from '../components/ProductCard';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { getRestaurants } from '../redux/actions/restaurantActions';
import RestaurantDetail from '../components/RestaurantDetail';
import { addToBasket, updateItem } from '../redux/actions/basketActions';

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const productState = useSelector((store) => store.products);
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );


  useEffect(() => {
    dispatch(getRestaurants(id));
    dispatch(getProducts(id));
  }, []);

  
  const handleAdd = (item, found) => {

    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addToBasket(item, restaurants));
  };

  return (
    <div>
      <div className="shadow">
        <Container>
          <h1>
            {isLoading ? (
              <Loader />
            ) : (
              !error && <RestaurantDetail data={restaurants} />
            )}
          </h1>
        </Container>
        <hr />
      </div>

      <Container>
        <div className="mb-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <FaFireFlameCurved className="text-red-500" />
            Popüler
          </h2>

          <p className="text-gray-600">
            Restoranın en çok tercih edilen ürünleri
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {productState.isLoading ? (
            <Loader />
          ) : productState.error ? (
            <Error message={productState.error} />
          ) : (
            productState.products.map((item) => (
              <ProductCard item={item} key={item.id} handleAdd={handleAdd} />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restaurant;
