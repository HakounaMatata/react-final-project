import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return { users, posts, todos };
};

const AnalyticsCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["analytics"],
    queryFn: fetchData,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching analytics data</div>;

  const { users, posts, todos } = data;

  const totalUsers = users.length;

  const mostPostsUser = users.reduce(
    (max, user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);
      return userPosts.length > max.posts.length
        ? { user, posts: userPosts }
        : max;
    },
    { user: null, posts: [] }
  );

  const leastPostsUser = users.reduce(
    (min, user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);
      return userPosts.length < min.posts.length
        ? { user, posts: userPosts }
        : min;
    },
    { user: null, posts: [] }
  );

  const mostCompletedTodosUser = users.reduce(
    (max, user) => {
      const userTodos = todos.filter(
        (todo) => todo.userId === user.id && todo.completed
      );
      return userTodos.length > max.todos.length
        ? { user, todos: userTodos }
        : max;
    },
    { user: null, todos: [] }
  );

  const leastCompletedTodosUser = users.reduce(
    (min, user) => {
      const userTodos = todos.filter(
        (todo) => todo.userId === user.id && todo.completed
      );
      return userTodos.length < min.todos.length
        ? { user, todos: userTodos }
        : min;
    },
    { user: null, todos: [] }
  );

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Total Users</h3>
        <div className="p-4 bg-gray-100 rounded">{totalUsers}</div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Most Posts</h3>
        <div className="p-4 bg-gray-100 rounded">
          {mostPostsUser.user?.name}: {mostPostsUser.posts.length} posts
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Fewest Posts</h3>
        <div className="p-4 bg-gray-100 rounded">
          {leastPostsUser.user?.name}: {leastPostsUser.posts.length} posts
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Most Completed To-Dos</h3>
        <div className="p-4 bg-gray-100 rounded">
          {mostCompletedTodosUser.user?.name}:{" "}
          {mostCompletedTodosUser.todos.length} completed
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Fewest Completed To-Dos</h3>
        <div className="p-4 bg-gray-100 rounded">
          {leastCompletedTodosUser.user?.name}:{" "}
          {leastCompletedTodosUser.todos.length} completed
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
