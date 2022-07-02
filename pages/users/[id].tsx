import { useRouter } from 'next/router'
import Layout from '../../components/layouts'

export default function DynamicDetail() {
    const router = useRouter();
    const { id } = router.query;
    return (
    <Layout>
        <h1>User Detail Dari {' '}{id}{' '}</h1>
    </Layout>
    )
}
