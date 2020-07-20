import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Signup from '../components/signup';
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        {/* <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
        <script defer src="https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js"></script> */}
        {/* <script defer src="../Firebase/init-firebase.js"></script> */}
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Web developer dedicated to building a better internet experience. Mainly focusing on Javascript, React, NodeJS and Firebase.</p>
        <p>
          Here you can make a donation to support my dev blog and also get access to premium articles.{' '}
          <a href="https://nextjs.org/learn">Click.</a>
        </p>
      </section>
      <Signup />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}