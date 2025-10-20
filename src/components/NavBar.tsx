import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header
      style={{
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        background: 'white',
        zIndex: 10,
      }}
    >
      <nav
        aria-label="Principal"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontWeight: 800,
            letterSpacing: 0.5,
            textDecoration: 'none',
            color: '#111',
          }}
        >
          StoreSport
        </a>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 16,
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}
        >
          <li>
            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>
              Productos
            </a>
          </li>
          <li>
            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>
              Contacto
            </a>
          </li>
        </ul>

        {/* Widget del carrito */}
        <CartWidget count={2} />
      </nav>
    </header>
  );
};

export default NavBar;
