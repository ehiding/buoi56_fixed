"use client";
import styles from "./productCard.module.css";
import "@/app/globals.css";
import { useRouter } from "next/navigation";

export default function ({ product }) {
  const router = useRouter();

  const onGotoDetail = () => {
    router.push(`product/${product.id}`);
  };

  return (
    <div>
      <div className={`${styles.card} ma-2`} onClick={onGotoDetail}>
        <img className={"d-block"} src={product.image} width={"100%"} />
        <span className={styles.cardTitle}>{product.name}</span>
      </div>
    </div>
  );
}
