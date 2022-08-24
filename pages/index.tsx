import type { NextPage } from 'next';
import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getPosts } from './api/post';

async function getServerSideProps() {
  const queryClient = new QueryClient();
  // const posts = await queryClient.prefetchQuery(['posts'], getPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  };
}
const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Home;
