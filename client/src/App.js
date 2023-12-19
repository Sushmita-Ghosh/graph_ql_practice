import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        name
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;

  console.log(data);

  return (
    <div className="App">
      <h1>Todos By Users</h1>
      <ul>
        {data.getTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
