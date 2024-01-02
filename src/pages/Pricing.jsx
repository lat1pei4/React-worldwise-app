// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            手頃な価格
            <br />
            月額たったの100円
          </h2>
          <p>
            このサービスは、手頃な価格で高品質な機能を提供します。
            <br />
            使いやすさと効率性を重視しており、ユーザーが最大限に利用できるよう設計されています。
            <br />
            私たちは、お客様の満足と利便性を第一に考えています。
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
