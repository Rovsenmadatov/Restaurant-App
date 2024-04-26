import api from './../../utils/api';
import ActionTypes from './../actionTypes';

export const getProducts = (restId) => (dispatch) => {

  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  api
    .get(`/products?restaurantId=${restId}`)
 
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )

    .catch((err) => {
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      });
    });
};

