import { createStore, combineReducers, applyMiddleware } from 'redux';
import showSmallPhoto, { setSmallPhotos } from './smallPhoto';
import thunk from 'redux-thunk';
import getIsLoaded, { setIsLoaded } from './isLoaded';
import getLoading, { setLoading } from './loading';
import getError, { errorOfLoading } from './errorOfLoading';
import getCurrentPhoto from './currentPhoto';

const rootReducer = combineReducers({
    smallPhoto: showSmallPhoto,
    isLoaded: getIsLoaded,
    loading: getLoading,
    error: getError,
    currentPhoto: getCurrentPhoto,
});

export const getUrl = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    let URL = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
    URL = fetch(URL).then(photos => photos.json());
    const [result] = await Promise.all([URL]);
    dispatch(setSmallPhotos(result));
    dispatch(setIsLoaded(true));
    dispatch(setLoading(false));
    dispatch(errorOfLoading(false));
  } catch {
    dispatch(errorOfLoading(true));
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;