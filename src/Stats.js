import style from "./scss/Stats.module.css";

const Stats = function () {
  return (
    <article className={style.card}>
      <div className={style.card__box}>
        <div className={style.card__img_container}>
          <picture>
            <source
              srcSet={require("./images/image-header-desktop.jpg")}
              media="(min-width: 50em)"
            />
            <img
              srcSet={require("./images/image-header-mobile.jpg")}
              alt="Peoples"
              className={style.card__bg}
            />
          </picture>
        </div>

        <div className={style.card__wrapped}>
          <div className={style.card__content}>
            <h2 className={style.card__title}>
              Get <span className={style.card__title_light}>insights</span> that
              help your business grow.
            </h2>
            <p className={style.card__description}>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>

          <ul className={style.card__highlights}>
            <li>
              <span className={style.main}>10k+</span>
              <span className={style.sub}>Companies</span>
            </li>

            <li>
              <span className={style.main}>314</span>
              <span className={style.sub}>Templates</span>
            </li>

            <li>
              <span className={style.main}>12M+</span>
              <span className={style.sub}>Queries</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Stats;
