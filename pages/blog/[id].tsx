import Layout from '../../components/layouts'

interface Blog {
    id: number;
    title: string;
    body: string;
}

interface BlogDetailProps {
    blog: Blog;
}

export default function DetailBlog(props : BlogDetailProps) {
  
    const { blog } = props;

    return (
        <Layout>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();
    
    const paths = dataBlog.map((blog: Blog) => ({
        params: {
            id: `${blog.id}`,
        },
    }));
    return {
        paths,
        fallback: false,
    }
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await res.json();

    return {
        props: {
            blog,
        }
    }
}