
'use client';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import Image from 'next/image';
import Container from '../(Components)/Container';
import Button from '../(Components)/Button';
import Link from 'next/link';

const CartPage = () => {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F3F3F3] py-12 min-h-screen">
      <Container>
        <h1 className="text-[42px] font-bold text-[#2D5016] mb-8">🛒 Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-[20px] p-12 text-center">
            <p className="text-[24px] text-[#404040] mb-6">Your cart is empty</p>
            <Link href="/products">
              <Button className="bg-[#7A9B57] text-white text-[20px] font-semibold px-8 py-4 rounded-[10px] hover:bg-[#6B8A4D]">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-[20px] p-8 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-6 border-b border-gray-200 py-6 last:border-0">
                  <Image 
                    src={item.images[0]} 
                    alt={item.name} 
                    width={120} 
                    height={120}
                    className="rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-[24px] font-medium text-[#2D5016]">{item.name}</h3>
                    <p className="text-[#A7A7A7] text-[18px]">{item.type}</p>
                    <p className="text-[28px] font-semibold text-[#CC7722] mt-2">৳ {item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button 
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="w-10 h-10 bg-gray-200 rounded-lg text-[24px] font-bold hover:bg-gray-300 flex items-center justify-center"
                    >
                      -
                    </Button>
                    <span className="text-[24px] font-semibold w-12 text-center">{item.quantity}</span>
                    <Button 
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="w-10 h-10 bg-gray-200 rounded-lg text-[24px] font-bold hover:bg-gray-300 flex items-center justify-center"
                    >
                      +
                    </Button>
                  </div>

                  <Button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-6 py-3 bg-red-500 text-white text-[18px] font-semibold rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[28px] font-semibold text-[#404040]">Total Items:</span>
                <span className="text-[28px] font-bold text-[#2D5016]">{totalQuantity}</span>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  onClick={() => dispatch(clearCart())}
                  className="flex-1 py-4 bg-gray-500 text-white text-[20px] font-semibold rounded-lg hover:bg-gray-600"
                >
                  Clear Cart
                </Button>
                <Button className="flex-1 py-4 bg-[#7A9B57] text-white text-[20px] font-semibold rounded-lg hover:bg-[#6B8A4D]">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default CartPage;