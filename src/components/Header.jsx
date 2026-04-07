export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          StoneCraft <span>Sandstone</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
