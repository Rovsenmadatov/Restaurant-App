import { BsTrash3 } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../redux/actions/basketActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  const handleDecrease = () => {
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };

  return (
    <div className="flex gap-4 border mb-10 rounded-lg p-4">
      <img className="w-[115px] rounded-lg" src={item.photo} />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
        <p className="text-gray-500">{item.restaurantName}</p>

        <div className="flex justify-between">
          <p className="font-semibold">{item.price}TL</p>

          <div className="border rounded-xl text-lg">
            <button
              onClick={handleDecrease}
              className="p-3 rounded-xl text-red-500 transition hover:bg-red-100"
            >
              {item.amount > 1 ? <FaMinus /> : <BsTrash3 />}
            </button>

            <span className="p-3">{item.amount}</span>

            <button
              onClick={handleIncrease}
              className="p-3 rounded-xl text-red-500 transition hover:bg-red-100"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;