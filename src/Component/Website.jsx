import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ------------------ DATA ------------------
const products = [
  { id: 1, name: "Gaming Headphone", price: 239, image: "src/assets/headphone.webp", rating: 4 },
  { id: 2, name: "Macbook Pro 13", price: 1099, image: "src/assets/Macbook.png", rating: 5 },
  { id: 3, name: "HomePod Mini", price: 59, image: "src/assets/HomePod Mini.png", rating: 4 },
  { id: 4, name: "Laptop Sleeve", price: 59, image: "src/assets/Laptop Sleeve.png", rating: 4 },
];

const recentlyViewed = [
  { id: 5, name: "Wireless Earbuds", price: 59, image: "src/assets/Wireless Earbuds.png", rating: 4 },
  { id: 6, name: "AirPods Max", price: 559, image: "src/assets/AirPods Max.png", rating: 5 },
  { id: 7, name: "iPad Mini", price: 569, image: "src/assets/iPad Mini.png", rating: 4 },
  { id: 8, name: "Flower Laptop Sleeve", price: 39, image: "src/assets/Flower Laptop Sleeve.png", rating: 4 },
];

// ------------------ COMPONENTS ------------------
function StarRating({ rating }) {
  return (
    <div className="flex text-green-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function ProductCard({ product, addToCart, toggleWishlist, wishlist }) {
  const liked = wishlist.some((item) => item.id === product.id);

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -6 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-4 relative group shadow-lg hover:shadow-2xl transition"
    >
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 text-xl"
      >
        {liked ? "❤️" : "🤍"}
      </button>

      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
        whileHover={{ scale: 1.1, rotate: 2 }}
      />

      <h3 className="font-semibold group-hover:text-green-400 transition">
        {product.name}
      </h3>
      <p className="text-sm text-gray-400">${product.price}</p>

      <StarRating rating={product.rating} />

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => addToCart(product)}
        className="mt-3 w-full border border-green-400 text-green-400 rounded-full py-2 hover:bg-green-400 hover:text-black transition"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}

function CartDrawer({ cart, setCart, open, setOpen }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-80 h-full bg-gray-900 text-white shadow-2xl p-5 z-50"
        >
          <h2 className="text-lg font-bold mb-4 text-green-400">Cart</h2>

          <div className="space-y-3 overflow-y-auto h-[70%]">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 font-semibold text-green-400">Total: ${total}</div>

          <button
            onClick={() => setCart([])}
            className="mt-3 w-full bg-red-500 text-white py-2 rounded"
          >
            Clear Cart
          </button>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 w-full border border-gray-600 py-2 rounded"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ------------------ MAIN APP ------------------
export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist"));
    if (saved) setWishlist(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setOpenCart(true);
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10 text-white">
      {/* Cart Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setOpenCart(true)}
          className="bg-green-400 text-black px-4 py-2 rounded-full font-semibold shadow-lg"
        >
          Cart ({cart.length})
        </button>
      </div>

      <CartDrawer cart={cart} setCart={setCart} open={openCart} setOpen={setOpenCart} />

      <div className="max-w-6xl mx-auto bg-gray-950 p-8 rounded-3xl shadow-2xl border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Similar Items You Might Like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>

        <hr className="my-10 border-gray-700" />

        <h2 className="text-2xl font-bold mb-6 text-green-400">Recently Viewed</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {recentlyViewed.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}