const Headquarters = (props) => {
  return (
    <section>
      <h2>Our headquarters</h2>
      {props.address.map((address) => (
        <div>
          <img src={address.img} alt={address.country} />
          <h3>{address.country}</h3>
          <address>
            {address.street}
            <br />
            {address.city}
            <br />
            {address.postcode}
            <br />
            {address.phone}
            <br />
          </address>
        </div>
      ))}
    </section>
  );
};

export default Headquarters;
