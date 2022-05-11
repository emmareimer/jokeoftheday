async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com",  {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await response.json();
  document.getElementById("joke-container").textContent = joke.joke
}

document.getElementById("joke-btn").addEventListener("click", getJoke);