export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description ?? "Description Default"}</p>

      <a href={props.repository.link ?? "#"}>Acessar repositórios</a>
    </li>
  );
}
