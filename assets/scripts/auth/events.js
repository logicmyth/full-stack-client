'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
 event.preventDefault();
 let data = getFormFields(event.target);
 api.signUp(data)
 .done(ui.success)
 .fail(ui.failure);
};

const onSignIn = (event) => {
 event.preventDefault();
 getUserIDPlaylist();
 let data = getFormFields(event.target);
 api.signIn(data)
 .done(ui.signInSuccess)
 .fail(ui.failure);
};

const onSignOut = (event) => {
 event.preventDefault();
 api.signOut()
 .done(ui.signOutSuccess)
 .fail(ui.failure);
};

const onChangePassword = (event) => {
 event.preventDefault();
 let data = getFormFields(event.target);
 api.changePassword(data)
 .done(ui.success)
 .fail(ui.failure);
};

const onGetSong = (event) => {
  event.preventDefault();
  let data = $(event.target).attr("id");
  api.getSong(data)
  .done(onAddToPlaylist(data))
  .fail(ui.failure);
};

const onAddToPlaylist = (data) => {
  event.preventDefault();
  api.addToPlaylist(data)
  .done(ui.success)
  .fail(ui.failure);
};

const getUserIDPlaylist = () => {
  
};

const onNavSignUp = () => {
   $('#open-sign-up').modal('show');
};

const onNavSignIn = () => {
   $('#open-sign-in').modal('show');
};

const onNavOptions = () => {
   $('#open-options').modal('show');
};

const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#sign-out').on('submit', onSignOut);
 $('#change-password').on('submit', onChangePassword);
 $('#nav-sign-up').on('click', onNavSignUp);
 $('#nav-sign-in').on('click', onNavSignIn);
 $('#nav-options').on('click', onNavOptions);
 $('.answers').on('click', onGetSong);
};
//
module.exports = {
 addHandlers,
};
