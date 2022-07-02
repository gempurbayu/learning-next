import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <header>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/blog'>Blog</Link></li>
        <li><Link href='/users'>Users</Link></li>
      </ul>
    </header>
    </>
  )
}

export default Home
