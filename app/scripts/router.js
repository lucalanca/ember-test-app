Email.Router.map(function () {
  
  this.resource('mails', function(){
    this.resource('mail', { path: '/:mail_id' });
  });
  
});
