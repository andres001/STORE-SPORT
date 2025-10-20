type ItemListContainerProps = {
  greeting: string; //  Prop requerida por la consigna
};

const ItemListContainer = ({ greeting }: ItemListContainerProps) => {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: '24px auto',
        padding: '24px 16px',
      }}
    >
      <h2 style={{ marginBottom: 8 }}>{greeting}</h2>
      <p style={{ color: '#666' }}>
        Aquí pronto verás el catálogo de productos.
      </p>
    </section>
  );
};

export default ItemListContainer;
