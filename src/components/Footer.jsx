export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {year} StoneCraft Sandstone. All rights reserved.</p>
      </div>
    </footer>
  );
}
