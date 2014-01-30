Email.MailRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('mail', params.mail_id);
  }
});

