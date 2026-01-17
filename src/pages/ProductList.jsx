import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function ProductList() {
  return (
    <div className="page">
      <h1>Product Disclosures</h1>
      <p className="subtitle">
        Structured, producer-declared product information made available for
        transparency and informed review.
      </p>

      <div className="filters">
        <input placeholder="Search product name" />
        <select>
          <option>All statuses</option>
          <option>Published</option>
          <option>Submitted</option>
        </select>
      </div>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
