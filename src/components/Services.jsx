const items = [
  "Bulk supply for construction and infrastructure",
  "Custom cut sizes, treads, and coping",
  "Architect and contractor liaison",
  "Careful loading, transport coordination",
  "Sample pieces on request (subject to availability)",
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Services</h2>
          <p>Beyond the catalog — how we support your project from enquiry to dispatch.</p>
        </div>
        <ul className="services-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
