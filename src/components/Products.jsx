import { products } from "../data/products.js";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={product.image}
          alt={`${product.name} — product photo placeholder`}
          width={720}
          height={480}
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__meta">
          <span className="unit">{product.unit}</span>
          <span className="price">{product.price}</span>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="products" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Products & pricing</h2>
          <p>
            Indicative pricing — every line includes a sample image placeholder until
            your photography is ready. Final quotation after we confirm specs and logistics.
          </p>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
