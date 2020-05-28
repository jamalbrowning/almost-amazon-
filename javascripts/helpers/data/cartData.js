
const cart = [];

const setCart = (book) => {
  cart.push(book);
};
//get the cart (for display)
const getCart = () => cart

export default { setCart , getCart}
