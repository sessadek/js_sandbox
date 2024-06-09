function PageState() {
  let currentState = new homeState;
  this.init = function() {
    this.change(currentState);
  }

  this.change = function(state) {
    currentState = state;
  }
}



function homeState() {
  document.getElementById('heading').textContent = 'Home';
}

function aboutState() {
  document.getElementById('heading').textContent = 'About Page';
}

function contactState() {
  document.getElementById('heading').textContent = 'Contact Page';
}

const page = new PageState();

page.init();


const home = document.getElementById('home'),
      about = document.getElementById('about'), 
      contact = document.getElementById('contact');
home.addEventListener('click', function(e) {
  page.change(new homeState);
  e.preventDefault();
});

about.addEventListener('click', function(e) {
  page.change(new aboutState);
  e.preventDefault();
});

contact.addEventListener('click', function(e) {
  page.change(new contactState);
  e.preventDefault();
});