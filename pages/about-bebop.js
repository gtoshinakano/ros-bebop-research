import React from 'react'
import Head from 'next/head'
import { withTranslation } from '../i18n'
import { I18nContext } from 'next-i18next'
import axios from 'axios'
import {useQuery} from 'react-query'
import {Placeholder} from "@Commons"
import {GlobalContainer} from "@Commons"
import {DefaultHero} from "@Components"
import {HighlightMarkdown} from "@Commons"

function AboutBebop(props) {

  const { i18n: { language } } = React.useContext(I18nContext)

  const { isLoading, error, data } = useQuery(['about-bebop', language], () => {
    return axios.get('/api/about-bebop',{
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
        >
          {data && <DefaultHero 
            bg={data.seo.hero_image} 
            header={data.seo.title}
          />}
          </Placeholder>
      </section>
      <GlobalContainer>
        <Placeholder
          loading={isLoading}
        >
          {data && <HighlightMarkdown>{data.markdownBody}</HighlightMarkdown>}
        </Placeholder>
      </GlobalContainer>
    </>
  )
}

AboutBebop.getInitialProps = async () => {
  return ({
    namespacesRequired: ['common'],
  })
}

export default withTranslation('common')(AboutBebop)