const token = '9f65a730caf46705766a24939259cc66cb9e1d73'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
