import * as postTypes from '../constants/PostActionTypes'
import * as loginTypes from '../constants/LoginActionTypes'
import * as pageTypes from '../constants/PageActionTypes'
import axios from "axios";

axios.defaults.baseURL = 'http://dev.followchats.com/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function fetchTweets() {
  return function (dispatch) {
    dispatch({
      type: postTypes.FETCH_POSTS
    });

    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({
          type: postTypes.FETCH_POSTS_FULFILLED,
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: postTypes.FETCH_POSTS_REJECTED,
          payload: err
        })
      })
  }
}

export function changeThemeStatus(status) {
  return function (dispatch) {
    dispatch({
      type: pageTypes.THEME_CHANAGE,
      payload: {
        status: status
      }
    });
  }
}

export function changeDrawerStatus(status) {
  return function (dispatch) {
    dispatch({
      type: pageTypes.DRAWER_STATUS,
      payload: {
        status: status
      }
    });
  }
}
export function changeSelectedItem(selected) {
  return function (dispatch) {
    dispatch({
      type: pageTypes.SELECTED_MENU_ITEM,
      payload: {
        selected: selected
      }
    });
  }
}
export function changeProfile(selected) {
  return function (dispatch) {
    dispatch({
      type: pageTypes.SELECTED_PROFILE,
      payload: {
        selected: selected
      }
    });
  }
}
export function loginRestoreEvent(email, password, token) {
  return function (dispatch) {
    dispatch({
      type: loginTypes.LOGIN_RESTORE,
      payload: {
        email: email,
        password: password,
        token: token
      }
    });
  };
}

export function loginUser(email, password) {
  return function (dispatch) {
    dispatch({
      type: loginTypes.LOGIN_PROCESS
    });
    dispatch({
      type: pageTypes.THEME_CHANAGE,
      payload: {
        status: false
      }
    });

    dispatch({
      type: pageTypes.DRAWER_STATUS,
      payload: {
        status: true
      }
    });

    var requstBody = {
      body: {
        email: email,
        password: password
      }
    };

    axios.post('authenticate/', requstBody)
      .then((response) => {
        let token = response.data.token;
        if (token) {
          dispatch({
            type: loginTypes.LOGIN_FULFILLED,
            payload: {
              email: email,
              password: password,
              token: token
            }
          })
        } else {
          dispatch({
            type: loginTypes.LOGIN_REJECTED,
            payload: (response.data.msg ? response.data.msg : "Error while logged in by user")
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: loginTypes.LOGIN_REJECTED,
          payload: err
        })
      })
  }
}

export function logOut() {
  return function (dispatch) {

    dispatch({
      type: loginTypes.LOGOUT,
      payload: {
        email: "",
        password: "",
        token: ""
      }
    });


    setTimeout(function () {
      dispatch({
        type: pageTypes.THEME_CHANAGE,
        payload: {
          status: false
        }
      });

      dispatch({
        type: pageTypes.DRAWER_STATUS,
        payload: {
          status: false
        }
      });
    }.bind(this), 10);


  }
}



//Posts
export function addPost(id, text) {
  return {
    type: postTypes.ADD_POST,
    payload: {
      id,
      text
    },
  }
}

export function fetchPosts(id) {
  return {
    type: postTypes.FETCH_POSTS,
    payload: {
      id
    },
  }
}

 
export const hideSocial = id => ({
  type: postTypes.HIDE_SOCIAL,
  payload: {
    id
  }
})


export const showSocial = id => ({
  type: postTypes.SHOW_SOCIAL,
  payload: {
    id
  }
})

export const deletePost = id => ({
  type: postTypes.DELETE_POST,
  payload: {
    id
  }
})

export const editPost = (id, text) => ({
  type: postTypes.UPDATE_POST,
  id,
  text
})