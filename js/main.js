// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const repoList = document.getElementById("repo-list");
  const orgName = "techGnosisCore"; // Update this if your organization name is different

  fetch(`https://api.github.com/orgs/${orgName}/repos`)
    .then(response => response.json())
    .then(repos => {
      // Check for errors (for example, if the API rate limit is exceeded)
      if (repos.message) {
        repoList.innerHTML = `<li>Error: ${repos.message}</li>`;
        return;
      }
      repos.forEach(repo => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = repo.name;
        li.appendChild(link);
        repoList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error fetching repos:", error);
      repoList.innerHTML = "<li>Error fetching repositories. Please try again later.</li>";
    });
});
