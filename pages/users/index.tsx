import { useRouter } from 'next/router';
import Layout from '../../components/layouts';
import styles from '../../styles/Users.module.css';

interface UserProps {

  dataUsers: Array<any>;

}

export default function Users(props: UserProps) {

  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout>
      <h1>
        Index Users
      </h1>
      {dataUsers.map(user => {
        return (
          <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    }
  }
}
