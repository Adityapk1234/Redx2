import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const Dummy_Products = [
    {
      id: "p1",
      title: "My first book",
      description: "My first book ever wrote",
      price: 6,
    },
    {
      id: "p2",
      title: "My second book",
      description: "My second book ever wrote",
      price: 6,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
