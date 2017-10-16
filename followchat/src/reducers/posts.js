import * as PostActions from '../constants/PostActionTypes'
import {socialData,dashSlideData} from '../data/data'

// Post Initial State.
const initialState = {
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
    socialData : socialData,
    dashSlideData : dashSlideData
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
      case PostActions.FETCH_POSTS: {
        const { id } = action.payload
        const updatedPosts = [...state.socialData]
        const postToUpdate = updatedPosts.findIndex(item => item.id === id)
        for ( var i = 0; i < 5; i++ ) {
          updatedPosts[postToUpdate].posts.push(updatedPosts[postToUpdate].posts[i % updatedPosts[postToUpdate].posts.length]);
        }
        return {
          ...state,
          socialData: updatedPosts,
        }
      }
      case PostActions.FETCH_POSTS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case PostActions.FETCH_POSTS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          posts: action.payload,
        }
      }
      case PostActions.ADD_POST: {
        return {
          ...state,
          posts: [...state.posts, action.payload],
        }
      }
      case PostActions.UPDATE_POST: {
        const { id } = action.payload
        const newPosts = [...state.posts]
        const postToUpdate = newPosts.findIndex(post => post.id === id)
        newPosts[postToUpdate] = action.payload;

        return {
          ...state,
          posts: newPosts,
        }
      }
      case PostActions.DELETE_POST: {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload),
        }
      }

      case PostActions.HIDE_SOCIAL: {
        const { id } = action.payload
        const updatedPosts = [...state.socialData]
        const postToUpdate = updatedPosts.findIndex(item => item.id === id)
        updatedPosts[postToUpdate].isHidden = true;
        return {
          ...state,
          socialData: updatedPosts,
        }
      }
      
      case PostActions.SHOW_SOCIAL: {
        const { id } = action.payload
        const updatedPosts = [...state.socialData]
        const postToUpdate = updatedPosts.findIndex(item => item.id === id)
        updatedPosts[postToUpdate].isHidden = false;
        return {
          ...state,
          socialData: updatedPosts,
        }
      }
      
      default: {
        return state
      }
    }

}