Email.MailsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('mail');
  }
});

