import { FaRegClock } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ data }) => {
    return (
        <Link
          to={`/restaurant/${data.id}`}
          className="shadow rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer hover:shadow-lg"
        >
          <img className="w-full object-contain" src={data.photo} alt={data.name} />
    
          <div className="p-3">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{data.name}</h3>
    
              <p className="flex gap-2 items-center">
                <FaStar className="text-red-500" />
                {data.rating}
              </p>
            </div>
    
            <p className="flex gap-4 text-sm my-2 text-gray-500">
              <span>{data.minPrice}TL minimum</span>
              <span>kategori</span>
            </p>
    
            <div className="flex gap-4">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <FaRegClock />
                <span>{data.estimatedDelivery} min</span>
              </p>
    
              {data.isDeliveryFree && (
                <p className="flex gap-2 items-center text-red-500 font-bold text-sm">
                  <MdDeliveryDining className="text-xl" />
                  Ücretsiz
                </p>
              )}
            </div>
          </div>
        </Link>
      );
    };


export default RestaurantCard
