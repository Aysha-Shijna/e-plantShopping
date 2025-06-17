import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
product-grid

const ProductList = () => {
  // Initialize with showing plants by default
  const [showPlants, setShowPlants] = useState(true);

  // Hardcoded plant categories and plants
  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Peperomia",
          price: "₹299",
          imageUrl: "https://www.thesill.com/cdn/shop/products/peperomia1_1100x1100.png?v=1689781941",
          id: "peperomia",
        },
        {
          name: "Snake Plant",
          price: "₹249",
          imageUrl: "https://www.thesill.com/cdn/shop/products/snakeplant1_1100x1100.png?v=1689782174",
          id: "snakeplant",
        },
        {
          name: "ZZ Plant",
          price: "₹249",
          imageUrl: "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/zzplant_400x400.jpg?v=1617212607",
          id: "zzplant",
        },
      ],
    },
    {
      category: "Succulents & Cacti",
      plants: [
        {
          name: "String of Pearls",
          price: "₹299",
          imageUrl: "https://cdn.shopify.com/s/files/1/0416/6418/2588/products/String-of-Pearls-Plant-on-white-background_360x.jpg?v=1678902824",
          id: "stringofpearls",
        },
        {
          name: "Panda Plant",
          price: "₹350",
          imageUrl: "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/pandaplant_400x400.jpg?v=1617220717",
          id: "pandaplant",
        },
        {
          name: "Moon Cactus",
          price: "₹550",
          imageUrl: "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/mooncactus_400x400.jpg?v=1617212443",
          id: "mooncactus",
        },
      ],
    },
    {
      category: "Outdoor Plants",
      plants: [
        {
          name: "Aloe Vera",
          price: "₹249",
          imageUrl: "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/aloe-vera_400x400.jpg?v=1617208564",
          id: "aloevera",
        },
        {
          name: "Tulsi",
          price: "₹250",
          imageUrl: "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/tulsi-plant_400x400.jpg?v=1617207803",
          id: "tulsi",
        },
        {
          name: "Money Plant",
          price: "₹300",
          imageUrl: "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/money-plant_400x400.jpg?v=1617208564",
          id: "moneyplant",
        },
      ],
    },
  ];

  // Handler to show plant list
  const handleShowPlants = () => {
    setShowPlants(true);
  };

  // Handler to show cart
  const handleShowCart = () => {
    setShowPlants(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links" style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>
            <button
              onClick={handleShowPlants}
              style={{
                fontSize: "25px",
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
              aria-label="Show Products"
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={handleShowCart}
              style={{
                fontSize: "25px",
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
              aria-label="Show Cart"
            >
              🛒 Cart
            </button>
          </li>
        </ul>
      </nav>

      {showPlants ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => ( // Loop through each category in plantsArray
  <div key={index}> {/* Unique key for each category div */}
    <h1>
      <div>{category.category}</div> {/* Display the category name */}
    </h1>
    <div className="product-list"> {/* Container for the list of plant cards */}
      {category.plants.map((plant, plantIndex) => ( // Loop through each plant in the current category
        <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
          <img 
            className="product-image" 
            src={plant.image} // Display the plant image
            alt={plant.name} // Alt text for accessibility
          />
          <div className="product-title">{plant.name}</div> {/* Display plant name */}
          {/* Display other plant details like description and cost */}
          <div className="product-description">{plant.description}</div> {/* Display plant description */}
          <div className="product-cost">${plant.cost}</div> {/* Display plant cost */}
          <button
            className="product-button"
            onClick={() => handleAddToCart(plant)} // Handle adding plant to cart
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleShowPlants} />
      )}
    </>
  );
};

export default ProductList;
