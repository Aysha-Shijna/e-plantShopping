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
            "https://hips.hearstapps.com/hmg-prod/images/beautiful-spider-plant-chlorophytum-isolated-in-a-royalty-free-image-1727206150.jpg?crop=0.668xw:1.00xh;0,0&resize=1120:*",
          id: "stringofpearls",
        },
        {
          name: "Panda Plant",
          price: "₹350",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0043/3628/7813/files/4-inch-panda-plant-kalanchoe-tomentosa_480x480.jpg?v=1698928952",
          id: "pandaplant",
        },
        {
          name: "Moon Cactus",
          price: "₹550",
          imageUrl:
            "https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/1280x1280/products/4260/15012/grafted_red__43861.1655327193.jpg?c=3",
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
            "https://m.media-amazon.com/images/I/81avahmtSIL._UF894,1000_QL80_.jpg",
          id: "aloevera",
        },
        {
          name: "Tulsi",
          price: "₹250",
          imageUrl:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRK0l91wD4mvc0qLM9j2ZaHYKf2OTPj3flsY_KXNaUcAtVx30lO0Qi4LOh_D9ojk5q6B1ZcjxjgSFmkks0mDuQOIA",
          id: "tulsi",
        },
        {
          name: "Money Plant",
          price: "₹300",
          imageUrl:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_wgGV4589mCq_MVboNzpEuorIZIDMbECTXx9n6EHCkmhuTSgZl3Pfm2Wn63GiOyIT8YqzFgwq1urPvrB5C2_Lkg",
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
