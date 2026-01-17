import { Link } from "react-router-dom"
import StatusBadge from "./StatusBadge"

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h2>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </h2>

      <div className="meta">
        <StatusBadge status={product.status} />
      </div>

      <div className="meta">Category: {product.category}</div>
      <div className="meta">Declared by {product.declaredBy}</div>
      <div className="meta">Last updated {product.updatedAt}</div>
    </div>
  )
}
