import combineTranslations from '../lib.js'
import router from './scopes/router.js'
import home from './scopes/home.js'

const fr = {
  fr : combineTranslations (
    router,
    home
  )
}
export default fr;
