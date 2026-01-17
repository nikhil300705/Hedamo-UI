import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
import StatusBadge from "../components/StatusBadge"

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <p className="p-6">Product not found</p>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm"
        >
          ← Back to products
        </Link>

        <div className="mt-6 bg-white rounded-xl shadow p-8">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <StatusBadge status={product.status} />
          </div>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Declared by:</strong> {product.declaredBy}
            </p>
            <p className="text-gray-400">
              Last updated {product.updatedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
