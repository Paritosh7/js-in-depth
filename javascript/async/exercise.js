function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json").catch(alert); // Error: 404

async function loadJsonAsync(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
  } catch (err) {
    alert(err);
  }
}

loadJsonAsync("no-such-user.json");
