import React from "react" 
import App from 'next/app'
import { appWithTranslation } from '../../i18n'
import {Layout} from "@Components"
import { ReactQueryDevtools } from "react-query-devtools"
import { QueryCache, ReactQueryCacheProvider } from "react-query"
import '@Static/css/bootstrap.min.css';
import '@Static/css/main.css'
import '@Static/css/custom.css' //Custom Bootstrap Overrides
import '@Static/css/prism.css'
import moment from "moment"
import "@Static/moment/jp"
import "@Static/moment/pt"
import { I18nContext } from 'next-i18next'

const queryCache = new QueryCache()

const MyApp = ({ Component, pageProps }) => {

  const { i18n: { language } } = React.useContext(I18nContext)
  moment.locale(language)


  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </ReactQueryCacheProvider>
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)