import { useRouter } from 'next/router'
import Layout from '../../components/layouts'


interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: User;
}

export default function DynamicDetail(props: UserDetailProps) {
    const router = useRouter();
    const { user } = props;
    return (
    <Layout>
        <h1>Nama User :  {user.name}</h1>
        <h1>Email :  {user.email}</h1>
        <h1>Nomor HP :  {user.phone}</h1>
        <h1>Website :  {user.website}</h1>
    </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    
    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: true,
    }
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user,
        }
    }
}