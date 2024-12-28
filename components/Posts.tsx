// src/components/Posts.tsx

type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

type POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
}>;

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts.map((post) => (
        <li key={post._id}>
          <a
            className="block p-4 hover:bg-blue-50"
            href={`/posts/${post?.slug?.current}`}
          >
            {post?.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
