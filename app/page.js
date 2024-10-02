import Image from "next/image";
import styles from "./page.module.css";
import "@/app/globals.css";
import { ProductCard } from "@/app/components";
import { products } from "@/app/utils";

export const metadata = {
  title: "F8",
  description: "F8 - product list",
};

export default function Home() {
  return (
    <div>
      <main className="d-fex">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </main>
    </div>
  );
}
