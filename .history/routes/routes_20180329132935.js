const Authentication = require('../controllers/authentication');
const Customer= require('../controllers/customer');
const Transaction= require('../controllers/transaction');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = app => {
  app.post('/api/signin', requireSignin, Authentication.signin);
  app.post('/api/signup', Authentication.signup);

  app.get('/api/customers',requireAuth,Customer.getAllCustomers);
  app.get('/api/customers/:customerId',requireAuth,Customer.getCustomer);
  app.post('/api/customers/new',requireAuth,Customer.createNewCustomer);
  app.post(`/api/edit/:customerId`,requireAuth,Customer.updateCustomer);
  app.delete(`/api/customers/:customerId`, requireAuth,Customer.deleteCustomer);

  app.post(`/api/edit/:customerId/:transactionId`,requireAuth,Transaction.updateTransaction);
  app.get(`/api/transactions/:customerId/:transactionId`,requireAuth, Transaction.getTransaction);
 app.get(`/api/transactions/:customerId`,requireAuth, Transaction.getAllTransactions);

  app.post('/api/transactions/:customerId',requireAuth,Transaction.createNewTransaction);
  app.post(`/api/transactions/:customerId/:transactionId`,requireAuth, Transaction.deleteTransaction);
}