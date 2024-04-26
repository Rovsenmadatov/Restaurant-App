import { FaPlus } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const ProductCard = ({ item, handleAdd }) => {
  const { data } = useSelector((store) => store.cart);

  const found = data.find((i) => i.productId === item.id);

  return (
    <div className="product-card border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className={'text-xl font-semibold'}>{item.title}</h1>
          <p className="text-gray-500">{item.desc}</p>
        </div>

        <p className="text-lg font-semibold">{item.price} TL</p>
      </div>

      <div className="relative  w-[115px] h-[115px]">
        <img
          className="rounded-md object-cover w-full h-full "
          src={item.photo}
        />
        <button
          onClick={() => handleAdd(item, found)}
          className="absolute end-2 bottom-2 bg-white  rounded-full hover:bg-red-100 transition w-8 h-8 grid place-items-center"
        >
          {found ? (
            <span className="font-bold">{found.amount}</span>
          ) : (
            <FaPlus className="text-lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;