const Entry = () => {
  return (
    <article className="entry-card">
      <img
        src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
        alt="Kyoto, Japan"
        className="entry-card__image"
      />

      <div className="entry-card__content">
        <p className="entry-card__country">Japan</p>
        <h2 className="entry-card__title">Kyoto, Japan</h2>
        <p className="entry-card__dates">12 Jan, 2026 - 18 Jan, 2026</p>
        <p className="entry-card__text">
          Kyoto is known for its beautiful temples, peaceful gardens, and
          traditional streets that blend history with everyday life.
        </p>
      </div>
    </article>
  );
};

export default Entry;
