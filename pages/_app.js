import 'styles/globals.scss'

import storeHomePage from 'helpers/actions/storeHomePage'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={storeHomePage}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
