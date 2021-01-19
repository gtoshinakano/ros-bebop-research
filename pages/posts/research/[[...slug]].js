import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withTranslation } from '../../../i18n'
import { I18nContext } from 'next-i18next'
import axios from 'axios'
import {useQuery} from 'react-query'
import {Placeholder, GlobalContainer, PrevNextBtn, HighlightMarkdown} from "@Commons"
import {DefaultHero} from "@Components"

function Page(props) {

  const { i18n: { language } } = React.useContext(I18nContext)

  const router = useRouter()
  const { slug } = router.query
  const route = slug ? slug[0] : ""
  const apiRoute = route ? `/api/posts/research/${route}` : "/api/posts/research"

  const { isLoading, error, data } = useQuery(['research', language, route], () => {
    return axios.get(apiRoute,{
      params: {
        language: language
      }
    }).then((res) => res.data)
  })//, {staleTime: Infinity})

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
        {data && <PrevNextBtn links={data.seo.links} />}
        {data && <HighlightMarkdown>{data.markdownBody}</HighlightMarkdown>}
        {data && <HighlightMarkdown>{data.markdownFooter}</HighlightMarkdown>}
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