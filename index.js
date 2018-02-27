
  const token = 'c150420fdb519150d8ea7d8a052de5cf60502af8'

  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
