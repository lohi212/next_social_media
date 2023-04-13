import AddPost from "@/components/AddPost";

function Home() {
  const handleAddPost = () => {
    //
  };
  return (
    <main className="p-5 root-container">
      <h1 className="text-center">Social Media App</h1>
      <AddPost handleAddPost={handleAddPost} />
    </main>
  );
}

export default Home;
