const app = "I don't do much.";

const token = 'fc270c2359d04e54eebc51670f86fe4af365eeba'

fetch('https://api.github.com/repos/jquery/jquery/commits', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
  .then(json => console.log(json));
