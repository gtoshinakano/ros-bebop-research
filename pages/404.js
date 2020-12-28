import PropTypes from 'prop-types';
import { withTranslation } from '../i18n'

const ErrorPage = ({t}) => {
  return(
    <div>
      {t("error-server")}
    </div>
  )
}

ErrorPage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ErrorPage)