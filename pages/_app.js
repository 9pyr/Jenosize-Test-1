import 'styles/globals.scss'

import store from 'helpers/actions/store'
import { TopNav, BottomNav } from 'components'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TopNav />
      <Component {...pageProps} />
      <BottomNav />
    </Provider>
  )
}

export default MyApp
