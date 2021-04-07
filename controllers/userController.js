export const join = (req, res) => res.render('join.pug', { pageTitle: 'Join'});
export const login = (req, res) => res.render('login.pug', { pageTitle: 'Login'});
export const logout = (req, res) => res.render('logout.pug', { pageTitle: 'Logout'});
export const users = (req, res) => res.render('users.pug', { pageTitle: 'Users'});
export const userDetail = (req, res) => res.render('userDetail.pug', { pageTitle: 'UserDetail'});
export const editProfile = (req, res) => res.render('editProfile.pug', { pageTitle: 'EditProfile'});
export const changePassword = (req, res) => res.render('changePassword.pug', { pageTitle: 'ChangePassword'});