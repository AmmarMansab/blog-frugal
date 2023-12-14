import styles from "./category.module.scss";
import Image from "next/image";

const CategoryCard = ({ post }) => {
  const { title, description, date } = post;
  return (
    <div className={styles["hotle-search-results-wrapper"]}>
      <div className={styles["bg-img-wrapper"]}>
        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout="fill" // or "responsive" depending on your use case
          objectFit="cover"
          alt=""
          placeholder="blur"
          blurDataURL="https://picsum.photos/640/360"
        />
      </div>

      <div className={styles["search-results-content-wrapper"]}>
        <div className={styles["hotel-name-wrapper"]}>
          <div className={styles["hotel-name-container"]}>
            <div className={styles["hotel-name"]}>{title}</div>
          </div>
          <div className={styles["trip-card"]}>
            {/* <Image src={""} alt="" /> */}
          </div>
        </div>
        <div className={styles["rating-wrapper"]}>
          <div className={styles["map-name-container"]}>
            <div className={styles["map-container"]}>{/* <MapSVG /> */}</div>
            <span className={styles["rating-content"]} title={"address"}>
              {description}
            </span>
          </div>
        </div>
        <div className={styles["info-wrapperr"]}>
          <div className={styles["date-wrapper"]}>
            <div className={styles["date-wrapper-item"]}>
              <span>{date}</span>
            </div>
            <div className={styles["date-wrapper-item"]}>
              {/* <span>{2}</span> */}
            </div>
          </div>
        </div>
        <div className={styles["total-price"]}>{""}</div>
        <div className={styles["bottom-tab-wrapper"]}>
          <div className={styles["name"]}>
            <div>{"Author Name"}</div>
          </div>

          <button
            className={styles["book-now-btn"]}
            //   onClick={handleViewClick}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
