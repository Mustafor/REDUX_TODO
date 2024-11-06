import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoReducer } from './redux/reducer'

const store = createStore(todoReducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
