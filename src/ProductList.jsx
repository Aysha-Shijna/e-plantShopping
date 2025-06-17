import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";
import CartItem from "../CartItem/CartItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const [showPlants, setShowPlants] = useState(true);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Peperomia",
          price: "₹299",
          imageUrl:
            "https://www.thesill.com/cdn/shop/products/peperomia1_1100x1100.png?v=1689781941",
          id: "peperomia",
        },
        {
          name: "Snake Plant",
          price: "₹249",
          imageUrl:
            "https://www.thesill.com/cdn/shop/products/snakeplant1_1100x1100.png?v=1689782174",
          id: "snakeplant",
        },
        {
          name: "ZZ Plant",
          price: "₹249",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/zzplant_400x400.jpg?v=1617212607",
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
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0416/6418/2588/products/String-of-Pearls-Plant-on-white-background_360x.jpg?v=1678902824",
          id: "stringofpearls",
        },
        {
          name: "Panda Plant",
          price: "₹350",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/pandaplant_400x400.jpg?v=1617220717",
          id: "pandaplant",
        },
        {
          name: "Moon Cactus",
          price: "₹550",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/mooncactus_400x400.jpg?v=1617212443",
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
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/aloe-vera_400x400.jpg?v=1617208564",
          id: "aloevera",
        },
        {
          name: "Tulsi",
          price: "₹250",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/tulsi-plant_400x400.jpg?v=1617207803",
          id: "tulsi",
        },
        {
          name: "Money Plant",
          price: "₹300",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0277/9437/9066/products/money-plant_400x400.jpg?v=1617208564",
          id: "moneyplant",
        },
      ],
    },
  ];

  const handleShowPlants = () => setShowPlants(true);
  const handleShowCart = () => setShowPlants(false);

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Redux: add product to cart
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true, // Use ID as key
    }));
  };

  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: "#4CAF50", padding: "10px" }}
      >
        <ul
          className="nav-links"
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <button
              onClick={handleShowPlants}
              style={{
                fontSize: "20px",
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
                fontSize: "20px",
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
        <div className="product-grid" style={{ padding: "20px" }}>
          {plantsArray.map((category, index) => (
            <div key={index} style={{ marginBottom: "40px" }}>
              <h2>{category.category}</h2>
              <div
                className="product-list"
                style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
              >
                {category.plants.map((plant) => (
                  <div
                    className="product-card"
                    key={plant.id}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "10px",
                      width: "180px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="product-image"
                      src={plant.imageUrl}
                      alt={plant.name}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      className="product-title"
                      style={{ fontWeight: "bold", marginTop: "10px" }}
                    >
                      {plant.name}
                    </div>
                    <div className="product-price" style={{ margin: "5px 0" }}>
                      {plant.price}
                    </div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.id]}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: addedToCart[plant.id]
                          ? "gray"
                          : "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: addedToCart[plant.id]
                          ? "not-allowed"
                          : "pointer",
                      }}
                    >
                      {addedToCart[plant.id] ? "Added" : "Add to Cart"}
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
