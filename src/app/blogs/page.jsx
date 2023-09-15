import Post from "@/components/post/Post";

function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Latest Blog Posts</h1>
      <div>
        <Post />
      </div>
      <div className="flex justify-end">
        <button className="font-bold uppercase">View All Posts</button>
      </div>
    </div>
  );
}

export default Blog;
