const Entry = (props) => {
  return (
    <article className="entry-card">
      <img className="entry-card__image" src={props.image} alt={props.title} />

      <div className="entry-card__content">
        <p className="entry-card__country">{props.country}</p>
        <h2 className="entry-card__title">{props.title}</h2>
        <p className="entry-card__dates">{props.dates}</p>
        <p className="entry-card__text">{props.text}</p>
        <p className="entry-card__country">
          {props.country}
          <a
            href={props.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="entry-card__link"
          >
            View on Google Maps
          </a>
        </p>
      </div>
    </article>
  );
};

export default Entry;
