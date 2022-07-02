import { useRouter } from 'next/router';
import Layout from '../../components/layouts';
import styles from '../../styles/Blog.module.css';

interface Post {
  id:number;
  title: string;
  body: string;
}

interface BLogProps {
  dataBlog: Post[]
}

export default function blog(props: BLogProps) {

  const {dataBlog} = props;
  const router = useRouter();

  return (
      <Layout>
        <h1>Blog Page</h1>
        {dataBlog.map(blog => {
          return (
            <div key={blog.id} className={styles.card} onClick={() => router.push(`/blog/${blog.id}`)}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          )
        })}
      </Layout>
      
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    }
  }
}
