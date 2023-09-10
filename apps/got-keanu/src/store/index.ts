import { configureStore } from "@reduxjs/toolkit"
import keanu from "./slices/keanu"
import rootSaga from "./sagas/index"
import { middleware as sagaMiddleware } from "./sagas/middleware"

const store = configureStore({
  reducer: {
    keanu,
  },
  middleware:
    (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(
          sagaMiddleware,
        ),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store