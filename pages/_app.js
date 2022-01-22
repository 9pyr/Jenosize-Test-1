import 'styles/globals.scss'

import store, { setDataStorage } from 'helpers/actions/store'
import dataMock from '__mock/dataMock'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('dataStorage')) {
      store.dispatch(setDataStorage(dataMock))
    }
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
