import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          あなたは世界を旅します
          <br />
          WorldWiseがあなたの冒険を追跡します
        </h1>
        <h2>
          あなたが考えることができるすべての都市に足跡を追跡する世界地図。
          <br />
          素晴らしい体験を忘れずに、あなたがどのように世界を歩き回ったかを友達に見せましょう。
        </h2>
        <Link to="/login" className="cta">
          今すぐ追跡を開始する
        </Link>
      </section>
    </main>
  );
}
