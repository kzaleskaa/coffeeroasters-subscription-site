const Collection = (props) => {
  return (
    <section>
      <h2>our collection</h2>
      {props.data.map((product) => (
        <div key={product.key}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.about}</p>
        </div>
      ))}
    </section>
  );
};

export default Collection;
