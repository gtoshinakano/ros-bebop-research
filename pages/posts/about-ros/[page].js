import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withTranslation } from '../../../i18n'
import { I18nContext } from 'next-i18next'
import axios from 'axios'
import {useQuery} from 'react-query'
import {Placeholder} from "@Commons"
import {GlobalContainer} from "@Commons"
import {DefaultHero} from "@Components"
import {HighlightMarkdown} from "@Commons"

function Page(props) {

  const { i18n: { language } } = React.useContext(I18nContext)

  const router = useRouter()
  const { page } = router.query

  console.log(page)

  const { isLoading, error, data } = useQuery(['about-ros', language, page], () => {
    return axios.get('/api/posts/about-ros/' + page,{
      params: {
        language: language
      }
    }).then((res) => res.data)
  }, {staleTime: Infinity})

  const t = props.t

  return (
    <>
      <Head>
        <title>{data && data.seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Placeholder
          loading={isLoading}
          paragraphs={10}
          heroImage
          header
        >
          {data && <DefaultHero 
            bg={data.seo.hero_image} 
            header={data.seo.title}
            date={data.seo.last_update}
          />}
        </Placeholder>
      </section>
      <GlobalContainer>
        {data && <HighlightMarkdown>{data.markdownBody}</HighlightMarkdown>}
      </GlobalContainer>
    </>
  )
}

Page.getInitialProps = async () => {
  return ({
    namespacesRequired: ['common'],
  })
}

export default withTranslation('common')(Page)