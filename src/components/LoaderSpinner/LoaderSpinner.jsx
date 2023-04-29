import { FidgetSpinner } from "react-loader-spinner";
import styles from "./LoaderSpinner.module.scss";

export const LoaderSpinner = () => {
  return (
    <div className={styles.spinner}>
      <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="var(--blue)"
      />
    </div>
  );
};
