`use strict`;

const isEmpty = (value) => {
  if (value === '') return true;
  return false;
}

const User = (function() {
  return {
    setCurrentUser: function(user){
      this.currentUser = user;
    },

    getCurrentUser: function(){
      return this.currentUser;
    }
  }
})();


module.exports = {
  isEmpty,
  User
};