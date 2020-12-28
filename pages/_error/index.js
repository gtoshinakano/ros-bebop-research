import { withTranslation } from '../../i18n'

function Error({ statusCode, t }) {
  return (
    <p>
      {statusCode
        ? `${t("error-server")} code: ${statusCode}`
        : `${t("error-client")}`}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, namespacesRequired: ['common'], }
}

export default withTranslation('common')(Error)