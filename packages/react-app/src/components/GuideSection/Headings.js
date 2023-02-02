import "./Guide.css";
export default function Headings({ size, content }) {
  return (
    <h1 className="headings" style={{ fontSize: size ? size : "30px" }}>
      {content}
    </h1>
  );
}
