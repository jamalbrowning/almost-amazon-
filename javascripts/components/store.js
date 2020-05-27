import bookData from '../helpers/data/bookData.js'
import utils from '../helpers/data/utils.js'

//bookData.getBook();
// get the book data
// then print book to the dom

const addToCartEvent =(e)=>{
  e.preventDefault();
  console.log('this works!');
}

const makeStore = () => {
  const bookInfo = bookData.getBook()
  
  const domString = `
    <h2>Our One Book</h2>
    get it free! It's only
    <h3 id="book-price">${bookInfo.price}</h3>
    <img class="book-image" src=${bookInfo.image} alt="Book cover"><br>
    <button class="btn btn-danger" id="add-to-cart" >Add to cart</button>
  `;
  utils.printToDom('#store', domString);

  document.querySelector('#add-to-cart').addEventListener('click', addToCartEvent)
}

export default { makeStore };
