import { useState } from "react";

export const Products = () => {
  const [selectedProductImage, setSelectedProductImage] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductDescription, setSelectedProductDescription] =
    useState("");

  const flagshipProducts = [
    {
      name: "Wingardium Wheat",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/800px-Bouteille.jpg",
      hops: ["HopA", "HopB"],
      description: `The Wingardium Wheat Butterbeer, with its golden hue and velvety texture, embodies the essence of warmth and comfort. Crafted from the finest wheat harvested on the Spellworth farm, this brew carries notes of caramel and butterscotch, enchanting the palate with its subtle sweetness. What sets Wingardium Wheat apart is its smooth finish, reminiscent of a gentle breeze on a summer's day. Its association with the Triwizard Tournament stems from its ability to invigorate and energize contestants, providing them with the fortitude to face the challenges ahead.`,
    },
    {
      name: "Alohomora Ale",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bottle_Iran_16.JPG",
      hops: ["HopA", "HopB"],
      description: `Alohomora Ale, with its effervescent charm and lively spirit, captures the essence of adventure in every sip. Brewed with a secret blend of hops and herbs cultivated on the Spellworth farm, this ale delights with its crispness and zesty undertones. Its citrus-infused flavor profile evokes images of sun-kissed orchards and verdant meadows. Renowned for its ability to unlock hidden potential, Alohomora Ale is a favorite among Hogwarts students during study sessions and late-night revelries. Its presence in the Triwizard Tournament festivities adds an element of excitement and spontaneity to the proceedings.`,
    },
  ];

  const schoolButterbeers = [
    {
      name: "Beauxbatons' Lumière Brew",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/800px-Bouteille.jpg",
      hops: ["HopA", "HopB"],
      description: `Beauxbatons' Lumière Brew, a radiant concoction of floral aromas and delicate flavors, exudes elegance and sophistication. Crafted by the skilled hands of Spellworth artisans, this brew transports the imbiber to a realm of enchanting beauty and refined taste. Infused with botanical extracts sourced from the Spellworth greenhouse, Lumière Brew captivates with its ethereal glow and velvety mouthfeel. Its association with the Triwizard Tournament reflects its status as the drink of choice for esteemed guests and dignitaries, enhancing the allure of the event with its graceful presence.`,
    },
    {
      name: "Durmstrang's Frostfire Fizz",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/800px-Bouteille.jpg",
      hops: ["HopA", "HopB"],
      description: `Durmstrang's Frostfire Fizz, a potion of ice and fire, ignites the senses with its bold flavors and exhilarating chill. Crafted from a blend of frost-kissed berries and fiery spices, this brew commands attention with its vibrant color and invigorating taste. As the flagship offering of the Spellworth Butterbeer Farm, Frostfire Fizz embodies the resilience and determination of its namesake institution. Its inclusion in the Triwizard Tournament festivities symbolizes the spirit of competition and the triumph of perseverance in the face of adversity.`,
    },
    {
      name: "Hogwarts' Mystic Mellowbrew",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/800px-Bouteille.jpg",
      hops: ["HopA", "HopB"],
      description: `Hogwarts' Mystic Mellowbrew, a testament to tradition and heritage, evokes a sense of nostalgia with its timeless appeal. Brewed according to age-old recipes passed down through generations of Spellworth brewers, Mellowbrew enchants with its rich, complex flavors and comforting warmth. Infused with mystical herbs and spices cultivated in the heart of the Spellworth estate, this brew holds the key to unlocking ancient secrets and unlocking hidden depths of magic. Its association with Hogwarts is deeply rooted in history, serving as a symbol of unity and camaraderie among students and faculty alike.`,
    },
  ];

  const handleClick = (product) => {
    setSelectedProductImage(product.image);
    setSelectedProductName(product.name);
    setSelectedProductDescription(product.description);
    const interval = setInterval(() => {
      setSelectedProductImage(null);
      setSelectedProductName("");
      setSelectedProductDescription("");
      clearInterval(interval);
    }, 15000);
  };

  return (
    <>
      <div className="final-presentation-container">
        <div className="presentation-row-1">
          {flagshipProducts.map((product, index) => (
            <p
              className="hovered-beer"
              key={index}
              onClick={() => handleClick(product)}
            >
              {product.name}
            </p>
          ))}
        </div>
        <div className="vertical-line"></div>

        <div className="presentation-row-2">
          {schoolButterbeers.map((product, index) => (
            <p
              className="hovered-beer"
              key={index}
              onClick={() => handleClick(product)}
            >
              {product.name}
            </p>
          ))}
        </div>
      </div>
      {selectedProductImage && (
        <div className="selected-product-container">
          <img
            className="product-image"
            src={selectedProductImage}
            alt="Selected Product"
          />
          <div className="product-description">
            <h3>{selectedProductName}</h3>
            <p>{selectedProductDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};
