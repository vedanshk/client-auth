
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore , applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Feature from './components/Feature';
import reducers from './reducers';
import SignOut from './components/auth/SignOut';



const el = document.getElementById('root');

const root = createRoot(el);

const store = createStore(reducers , {
    auth:{
        authenticated: localStorage.getItem('token')
    }
} , applyMiddleware(reduxThunk));


root.render(<BrowserRouter>

    <Provider store={store}>   
        <App>

        <Route path="/" exact component={Welcome}>

        </Route>
        <Route path="/signup" component={SignUp}>

        </Route>
        <Route path="/feature" component={Feature} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
    </App>
    </Provider>


</BrowserRouter>);