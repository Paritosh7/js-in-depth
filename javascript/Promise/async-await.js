async function asyncAwaitFunc() {
  const response = await fetch("/article/promise-chaining/user.json");
  const user = await response.json();
  const userResponse = fetch(`https://api.github.com/users/${user.name}`);
  const githubUser = await userResponse.json();

  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    });
  }, 3000);

  img.remove();
  return githubUser;
}
