import ActionTypes from './../actionTypes';
import api from './../../utils/api';
import { v4 } from 'uuid';
import axios from 'axios';


export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });

  api
    .get(`/cart`)
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};


export const addToBasket = (product, rest) => (dispatch) => {

  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };


  api
    .post(`/cart`, newItem)

    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: newItem,
      })
    );
};


export const updateItem = (id, newAmount) => (dispatch) => {

  api
    .patch(`/cart/${id}`, { amount: newAmount })

    .then((res) => {
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: res.data, 
      });
    });
};


export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};