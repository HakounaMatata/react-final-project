import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchUserDetails = async (id) => {
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const postsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const todosResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );

  const user = await userResponse.json();
  const posts = await postsResponse.json();
  const todos = await todosResponse.json();

  return { user, posts, todos };
};

const UserDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["userDetails", id],
    queryFn: () => fetchUserDetails(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user details</div>;

  const { user, posts, todos } = data;

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
      <p>Email: {user.email}</p>

      <h3 className="text-lg font-semibold mt-4">Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4 className="font-semibold">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">To-Dos</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`mb-2 ${
              todo.completed ? "line-through text-green-500" : ""
            }`}
          >
            <span>{todo.title}</span>
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`ml-2 p-1 rounded ${
                todo.completed ? "bg-gray-500" : "bg-blue-500"
              }`}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
