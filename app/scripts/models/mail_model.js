var emailContent1 = "<p>Master cleanse flannel tattooed, Williamsburg occupy next level fingerstache swag art party Cosby sweater Vice meh asymmetrical put a bird on it. Before they sold out fap you probably haven't heard of them, squid ethical Truffaut Williamsburg. Cray whatever pickled forage, Neutra kale chips Wes Anderson synth twee cardigan ennui salvia. Shabby chic High Life Pitchfork beard sustainable small batch. Fap deep v locavore distillery, Marfa semiotics flexitarian iPhone pickled chillwave. Plaid photo booth single-origin coffee four loko deep v pop-up. Mlkshk paleo try-hard VHS Wes Anderson fap Blue Bottle, kogi twee trust fund butcher.</p>\
\
<p>Tonx fixie Helvetica American Apparel try-hard, slow-carb mumblecore Cosby sweater you probably haven't heard of them messenger bag beard tofu hella 3 wolf moon. Lo-fi Austin Pitchfork paleo, forage squid kale chips flannel. Ennui put a bird on it quinoa, gluten-free tofu Cosby sweater readymade shabby chic plaid deep v butcher brunch. Fashion axe ennui hella, pop-up bicycle rights Shoreditch seitan keffiyeh umami whatever dreamcatcher 90's pour-over shabby chic. Hella tofu pickled American Apparel fingerstache, chia chambray kitsch pour-over skateboard mlkshk cred bespoke. DIY bicycle rights messenger bag 8-bit, Tonx jean shorts kitsch whatever Blue Bottle brunch hashtag blog church-key aesthetic squid. Ethical Tonx twee, plaid XOXO cred deep v master cleanse Portland vinyl readymade wayfarers biodiesel ennui synth.</p>",
  emailContent2 = "<p>Bitters freegan squid seitan, tousled distillery master cleanse synth. Organic meggings Neutra actually, plaid fanny pack tousled skateboard Truffaut YOLO polaroid PBR Pitchfork. VHS sustainable Neutra, Intelligentsia chia Portland single-origin coffee hoodie put a bird on it Helvetica Odd Future Echo Park selvage salvia. Pickled art party semiotics, XOXO pop-up locavore forage bitters Tumblr before they sold out hashtag flannel cardigan McSweeney's cliche. Ugh whatever fanny pack ethical, beard food truck Helvetica. Flannel ennui tote bag ugh, Pitchfork gentrify messenger bag fixie mlkshk flexitarian food truck cray sartorial Vice. Pitchfork Truffaut yr lomo PBR&B pug Etsy, before they sold out street art leggings photo booth cardigan quinoa organic scenester.</p>\
\
<p>Gastropub kitsch polaroid vinyl, art party pug four loko kale chips typewriter. Occupy mixtape fixie, iPhone viral 90's mustache literally Thundercats. Tattooed Neutra lomo kitsch wolf, paleo flexitarian Truffaut before they sold out next level Brooklyn. Hashtag organic before they sold out authentic direct trade. Godard High Life swag, disrupt +1 pop-up narwhal 3 wolf moon flannel deep v Tonx. Kogi bicycle rights slow-carb, disrupt bitters Cosby sweater cray 3 wolf moon 8-bit actually stumptown. Plaid cliche fap, fashion axe farm-to-table actually gentrify try-hard photo booth authentic fingerstache Bushwick selvage.</p>\
\
<p>Do you need some dummy text? *sigh* Of course you do.</p>";


/*global Ember*/
Email.Mail = DS.Model.extend({
    subject: DS.attr('string'),

    from: DS.attr('string'),

    content: DS.attr('string'),

    photo_url: DS.attr('string')
});

// probably should be mixed-in...
Email.Mail.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Email.Mail.FIXTURES = [
  
  {
    id: 0,
    
    subject: 'Welcome to Ember.',
    
    from: 'team@ember.js',
    
    content: emailContent1,

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg'
    
  },
  
  {
    id: 1,
    
    subject: 'You got mail.',
    
    from: 'mail@spamservice.com',
    
    content: emailContent2,

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg'


    
  },
  {
    id: 2,
    
    subject: 'Welcome to Ember.',
    
    from: 'team@ember.js',
    
    content: 'Welcome to Ember braw!',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg'
    
  },
  
  {
    id: 3,
    
    subject: 'You got mail.',
    
    from: 'mail@spamservice.com',
    
    content: 'I\'m just kidding',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg'


    
  },
  {
    id: 4,
    
    subject: 'Welcome to Ember.',
    
    from: 'team@ember.js',
    
    content: 'Welcome to Ember braw!',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg'
    
  },
  
  {
    id: 5,
    
    subject: 'You got mail.',
    
    from: 'mail@spamservice.com',
    
    content: 'I\'m just kidding',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg'


    
  },
  {
    id: 6,
    
    subject: 'Welcome to Ember.',
    
    from: 'team@ember.js',
    
    content: 'Welcome to Ember braw!',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg'
    
  },
  
  {
    id: 7,
    
    subject: 'You got mail.',
    
    from: 'mail@spamservice.com',
    
    content: 'I\'m just kidding',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg'


    
  },
  {
    id: 8,
    
    subject: 'Welcome to Ember.',
    
    from: 'team@ember.js',
    
    content: 'Welcome to Ember braw!',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg'
    
  },
  
  {
    id: 9,
    
    subject: 'You got mail.',
    
    from: 'mail@spamservice.com',
    
    content: 'I\'m just kidding',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg'


    
  },
  {
    id: 10,
    
    subject: 'Welcome to Ember.',
    
    from: 'team@ember.js',
    
    content: 'Welcome to Ember braw!',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg'
    
  },
  
  {
    id: 11,
    
    subject: 'You got mail.',
    
    from: 'mail@spamservice.com',
    
    content: 'I\'m just kidding',

    photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg'


    
  }
  
];
