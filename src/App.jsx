import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "./redux-toolkit/services/jsonPlaceholderApi";
import { useState } from "react";
const App = () => {
  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const [createPosts, { loading: isCreating, error: createError }] =
    useCreatePostsMutation();
  const [newPosts, setNewPosts] = useState({ title: "", body: "", id: 9999 });
  if (isLoading) return <p> Loading....</p>;
  if (isCreating) return <p>There was an error while creating</p>;
  if (error) return <p>There was an error</p>;
  if (createError) return <p>There was an error Created</p>;
  const handleCreatePosts = async () => {
    await createPosts(newPosts);
    refetch();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) =>
          setNewPosts((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Body.."
        onChange={(e) =>
          setNewPosts((prev) => ({ ...prev, body: e.target.value }))
        }
      />
      <button onClick={handleCreatePosts} disabled={isCreating}>
        Create Post
      </button>
      <p>Hey there i am learning RTK Query</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default App;
