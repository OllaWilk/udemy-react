import './CoreConcept.css';
export function CoreConcept({ image, title, descritpoion }) {
  return (
    <li>
      <img src={image} alt={{ title }} />
      <h3>{title}</h3>
      <p>{descritpoion}</p>
    </li>
  );
}
