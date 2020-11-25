import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { i18n, Link, withTranslation } from '../i18n'
import { I18nContext } from 'next-i18next'
import axios from 'axios'
import {useQuery} from 'react-query'

function Home(props) {

  const { i18n: { language } } = React.useContext(I18nContext)

  const { isLoading, error, data } = useQuery(['home', language], () => {
    return axios.get('http://localhost:3000/api/home',{
      params: {
        language: language
      }
    }).then((res) => res.data)
  }, {staleTime: Infinity})

  const t = props.t

  return (
    <div className={styles.container}>
      <Head>
        <title>{data && data.seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('Hello')}
        </h1>

        <p className={styles.description}>
          {data && data.seo.description}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
        >
          {t('change-locale')}
        </button>

        <div className={styles.grid}>
          <div className={styles.card}>
            {data && data.markdownBody}
          </div>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  return ({
    namespacesRequired: ['common'],
  })
}

export default withTranslation('common')(Home)