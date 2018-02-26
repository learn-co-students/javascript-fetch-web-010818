const app = "I don't do much.";

const token = "7b8adf5d3936bad7097729538eb0da440c002014"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
