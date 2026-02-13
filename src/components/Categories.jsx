import hoodie from "../assets/Hoodies.png";
import joggers from "../assets/TShirt.png";
import sweatshirt from "../assets/SweatShirt.png";
import tshirt from "../assets/TShirt.png";

function Categories() {
  const categories = [
    { name: "Hoodies", image: hoodie },
    { name: "Joggers", image: joggers },
    { name: "Sweat Shirts", image: sweatshirt },
    { name: "T-shirts", image: tshirt },
  ];

  return (
    <section className="categories-section">
      <h2 className="categories-title">Categories</h2>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div className="category-item" key={index}>
            <div className="category-image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
