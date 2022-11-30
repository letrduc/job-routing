const Auth = {
  isAuthenticated: false,
  signin(callback) {
    Auth.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
export default Auth;
