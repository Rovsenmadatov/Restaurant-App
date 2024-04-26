import { IoWarningOutline } from 'react-icons/io5';

const Error = ({ message, retry }) => {
  return (
    <>
      <div className="flex gap-4 bg-red-500 p-5 rounded text-white my-10">
        <IoWarningOutline className="text-4xl" />

        <div className="font-semibold">
          <h2>Üzgünüz Bir Sorun Oluştu!</h2>
          <p>{message}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={retry}
          className="border px-5 py-2 rounded font-semibold hover:bg-gray-100"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
