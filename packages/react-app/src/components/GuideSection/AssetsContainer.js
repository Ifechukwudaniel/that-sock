import "./Guide.css";
export default function Assets({ images }) {
  return (
    <div className="containerise">
      <div
        className={images.length === 4 ? "imageContainer4" : images.length === 2 ? "imageContainer2" : "imageContainer"}
      >
        {images.map((image, i) => (
          <img src={image} key={i} />
        ))}
      </div>
    </div>
  );
}
