const SketchfabModel = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="React Developer Waving || Raihan Sarkar"
        src="https://sketchfab.com/models/57e7e081226b4572847735e0b5ef45d5/embed"
        width="100%"
        height="480"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        // mozallowfullscreen="true"
        // webkitallowfullscreen="true"
        style={{ borderRadius: "12px" }}
      />
    </div>
  );
};

export default SketchfabModel;
