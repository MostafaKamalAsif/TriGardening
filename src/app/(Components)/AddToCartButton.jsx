'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className="bg-[#7A9B57] text-white text-[18px] font-medium px-5 py-2 rounded-[8px] hover:bg-[#658b47] transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
