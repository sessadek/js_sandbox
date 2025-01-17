const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

function profileIterator(profiles) {
  let i = 0;
  return {
    next: function() {
      if(i >= profiles.length) {
        i = 0;
      }
      return {value: profiles[i++], done: false};
      // return i < profiles.length ?  {value: profiles[i++], done: false} : {done: true};
    }
  };
}
const profile = profileIterator(data);
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  let currentProfile = profile.next().value;
  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;
  
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  }
  
  // else {
  //   window.location.reload();
  // }
}
