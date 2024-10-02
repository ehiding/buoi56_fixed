import { products } from "@/app/utils";

export default function ProductDetail({ params }) {
  const { id } = params;

  const product = products.find((product) => {
    return product.id === Number(id);
  });
  console.log(product);

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Mã id: {product.id}</p>
      <p>Tên sản phẩm: {product.name}</p>
      <img src={product.image}></img>
    </div>
  );
}
