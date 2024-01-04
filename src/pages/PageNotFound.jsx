import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <h1>404 Not Found 😢</h1>
      <Button
        type={"primary"}
        onClick={() => {
          navigate("/");
        }}
      >
        ホームへ
      </Button>
    </div>
  );
}
