'use client';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Button from '../(Components)/Button';

// Add this component temporarily to your home page to test Redux
const ReduxTestComponent = () => {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const testProduct = {
    id: 999,
    name: "Test Product",
    type: "Test",
    price: "100",
    images: ["/Deliciosa.svg"],
    reviews: 5,
    slug: "test-product"
  };

  const handleTest = () => {
    console.log('🔵 Test button clicked');
    dispatch(addToCart(testProduct));
    console.log('🔵 Dispatch completed');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-2xl border-4 border-blue-500 z-50">
      <h3 className="text-xl font-bold mb-4">🧪 Redux Test Panel</h3>
      <div className="mb-4">
        <p className="text-lg">Total Items: <strong className="text-green-600">{totalQuantity}</strong></p>
        <p className="text-lg">Cart Items: <strong className="text-green-600">{items.length}</strong></p>
      </div>
      <Button 
        onClick={handleTest}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        ➕ Test Add to Cart
      </Button>
      <div className="mt-4 max-h-40 overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className="text-sm border-t pt-2 mt-2">
            {item.name} (x{item.quantity})
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxTestComponent;