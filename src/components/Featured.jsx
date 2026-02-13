import tShirt from "../assets/TShirt.png";
import sweatshirt from "../assets/SweatShirt.png";
import hoodies from "../assets/Hoodies.png";

const products = [
  {
    id: 1,
    image: sweatshirt,
    title: "I Wandered Lonely as a Cloud",
    category: "Sweatshirt",
    price: "$ 15.99"
  },
  {
    id: 2,
    image: tShirt,
    title: "Black Minimal Tee",
    category: "T-shirt",
    price: "$ 12.99"
  },
  {
    id: 3,
    image: hoodies,
    title: "Urban Hoodie",
    category: "Hoodie",
    price: "$ 19.99"
  },
  {
    id: 4,
    image: tShirt,
    title: "Street Fit Joggers",
    category: "Joggers",
    price: "$ 22.99"
  },
  {
    id: 5,
    image: tShirt,
    title: "Classic White Tee",
    category: "T-shirt",
    price: "$ 10.99"
  },
  {
    id: 6,
    image: sweatshirt,
    title: "Minimalist Black Tee",
    category: "Sweatshirt",
    price: "$ 13.99"
  },
  {
    id: 7,
    image: tShirt,
    title: "Classic White Tee",
    category: "T-shirt",
    price: "$ 10.99"
  },
];

function Featured() {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured</h2>

      <div className="featured-grid">
        {products.map((item) => (
          <div key={item.id} className="featured-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="product-info">
              <h3>{item.title}</h3>
              <p className="category">{item.category}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

// function Featured() {
//   return (
//     <section className="featured-section">
//       <h2 className="featured-title">Featured</h2>

//       <div className="featured-grid">

//         {/* Large Left Card */}
//         <div className="featured-card large">
//           <div className="image-wrapper">
//             <img src={product} alt="Product" />
//           </div>
//           <div className="product-info">
//             <h3>I Wandered Lonely as a Cloud</h3>
//             <p className="category">Sweatshirt</p>
//             <p className="price">$ 15.99</p>
//           </div>
//         </div>

//         {/* Top Right */}
//         <div className="featured-card">
//           <div className="image-wrapper">
//             <img src={product} alt="Product" />
//           </div>
//           <div className="product-info">
//             <h3>I Wandered Lonely as a Cloud</h3>
//             <p className="category">Sweatshirt</p>
//             <p className="price">$ 15.99</p>
//           </div>
//         </div>

//         {/* Bottom Right */}
//         <div className="featured-card small">
//           <div className="image-wrapper">
//             <img src={product} alt="Product" />
//           </div>
//           <div className="product-info">
//             <h3>I Wandered Lonely as a Cloud</h3>
//             <p className="category">Sweatshirt</p>
//             <p className="price">$ 15.99</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

export default Featured;
