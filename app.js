var quotes = [
  'Nothing is impossible, the word itself says \I\’m possible -Audrey Hepburn',
  'Whether you think you can or you think you can\’t, you\’re right. - Henry Ford',
  'Life is 10 percent what happens to me and 90 percent of how I react to it. -- Charles Swindoll',
  'None of us is as smart as all of us. -- Ken Blanchard',
  'Believe you can and you’re halfway there. -- Theodore Roosevelt',
   'To handle yourself, use your head; to handle others, use your heart. -- Eleanor Roosevelt',
  'Too many of us are not living our dreams because we are living our fears. -- Les Brown',
  'Alone, we can do so little; together we can do so much. -- Helen Keller',
  'Whatever the mind of man can conceive and believe, it can achieve. -- Napoleon Hill',
  

]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}

  
  