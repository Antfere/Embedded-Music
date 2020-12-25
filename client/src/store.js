import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk]

const store = createStore(
    rootReducer, /* preloadedState, */
    compose(
        applyMiddleware(...middleware),
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE() : compose
    )

);

export default store