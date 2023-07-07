const withAuth = (req, res, next) => {
  console.log('withauth fired')
    // TODO: Add a comment describing the functionality of this if statement
    if (!req.session.user_id) {
      console.log('not logged in')
      res.redirect('/login');
    } else {
      console.log('yes logged in')
      next();
    }
  };
  
  module.exports = withAuth;