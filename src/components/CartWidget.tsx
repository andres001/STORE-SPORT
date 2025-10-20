type CartWidgetProps = {
  count?: number;
};

const CartWidget = ({ count = 0 }: CartWidgetProps) => {
  return (
    <button
      aria-label="Carrito"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'transparent',
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: '6px 10px',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: 18 }}>🛒</span>
      {count > 0 && (
        <span
          style={{
            minWidth: 20,
            height: 20,
            borderRadius: 10,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            background: 'black',
            color: 'white',
            padding: '0 6px',
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default CartWidget;
