// Registering service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../service-worker.js")
      .then((reg) => console.log("Server Worker is registered")) // if the file is succesfully registered
      .catch((err) => console.log(`Server Worker: Error:${err}`)); // Something went wrong server worker doesn't work
  });
}
