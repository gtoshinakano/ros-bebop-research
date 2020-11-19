  
import App from 'next/app'
import { appWithTranslation } from '../../i18n'
import {Layout} from "@Components"
import { ReactQueryDevtools } from "react-query-devtools"
import { QueryCache, ReactQueryCacheProvider } from "react-query"
import 'bootstrap/dist/css/bootstrap.min.css';


const queryCache = new QueryCache()

const MyApp = ({ Component, pageProps }) => {
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