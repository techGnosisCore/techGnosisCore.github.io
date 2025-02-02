# techGnosisCore.github.io

This repository hosts the GitHub Pages site for techGnosisCore. The site dynamically lists all repositories in the techGnosisCore organization by using the GitHub API.

## Folder Structure

techGnosisCore.github.io/ 

├── index.html # The main HTML page 
├── css/ 
│ └── styles.css # The CSS styling for the site 
├── js/ 
│ └── main.js # The JavaScript that fetches and displays the repository list 
├── README.md # This file 
└── .gitignore # Files and folders to ignore in this repository


## How It Works

- **index.html** loads the site and includes the CSS and JavaScript files.
- **js/main.js** uses the GitHub API to fetch the list of repositories from the techGnosisCore organization and renders them as a list.
- The site is dynamic—new repositories will appear automatically when added.

## How to Deploy

1. Push your changes to the repository.
2. In the repository settings, under "Pages," select the branch (e.g., `main`) and the root folder as the source.
3. Your site will be available at: `https://techGnosisCore.github.io`

## Customization

- Change the organization name by updating the `orgName` variable in **js/main.js**.
- Customize the appearance by modifying **css/styles.css**.
- Add additional content or sections by editing **index.html**.

## License

This project is licensed under the MIT License.
