import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Post, getPosts } from '../api/post';


export default function Posts() {
    const { data } = useQuery<Array<Post>>(['posts'], getPosts);
    if (!data) {
        return <div>No posts</div>
    }
    return <main>
        <h1>Posts</h1>
        <ul>
            {data!.map((post) => (
                <li key={post.id}>
                    <h1>{post.name}</h1>
                    <div>{post.body}</div>
                    <Link href={`/posts/${post.id}`}>Go to detail</Link>
                </li>
            ))}
        </ul>
    </main>
}