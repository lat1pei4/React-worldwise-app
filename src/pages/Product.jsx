import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>WorldWideについて</h2>
          <p>
            WorldWideは、旅行の記録を残すための革新的なプラットフォームです。
            <br />
            私たちは、旅の思い出を保存し、それを共有する新しい方法を提供することで、世界中の旅行者をサポートします。
            <br />
            このサービスは、使いやすく、直感的なインターフェースで設計されており、どんな旅行者にも適しています。
          </p>
          <p>
            旅行者のニーズに応えるため、私たちは継続的にサービスを改善し、最新の機能を提供しています。
            <br />
            高品質な旅行体験を提供することに重点を置き、ユーザーが世界中の冒険を容易に記録し、共有できるようにしています。
          </p>
        </div>
      </section>
    </main>
  );
}
