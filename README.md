# Intro to GitHub API Exercise

1. In your DevLeague temp directory, create a directory called `github_api_intro`.

2. In `github_api_intro`, create the following files and directories: `js/app.js`, `css/styles.css` (optional), `index.html`.

3. Create the basic HTML structure and reference the JS and CSS files in your `index.html`. Be sure to reference jQuery before the `js/app.js` file:
  ```
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  ```
  
  Run your app using the `http-server` command.

4. Within the `<body>` tags, create a `<div>` containing a text `<input>` and a `<button>`.

5. In `js/app.js`, write code that ensures the DOM is ready. The rest of your JS code should be written within this function.

6. Create a GET request to the following URL to retrieve all the repos from the `devleague` organization:
  ```
  https://api.github.com/orgs/devleague/repos
  ```

  Note: Visit the URL in your browser to see what data is returned or `console.log` the data.

7. With the data retrieved from step 6, display the name of each repo returned as a list on the page.

8. Create a click event listener for the `<button>` you implemented in step 4 so that it retrieves the value of the `<input>` (this will be a GitHub username).

9. Then create a function `listUserRepos` that takes a GitHub username as a param and fires a GET request to the following URL. Then call this function whenever the button you implemented in step 4 is clicked.
  ```
  https://api.github.com/users/:username/repos
  ```

  Note: Replace `:username` above with the GitHub user's username.

10. Inside the `listUserRepos` function, with the data retrieved from step 9, display the username as an `<h2>` and then list the names of the user's repos below it.

11. Create a GET request to list all the commit messages for a single repo. Display this data to the page.
  ```
  https://api.github.com/repos/:owner/:repo/commits
  ```

  Note: Replace `:owner` with a GitHub user or organization of your choice and `:repo` with the name of a repo of your choice.

12. Create a GET request to list all the commit messages authored by Jon `theRemix`. Display this data to the page.
  ```
  https://api.github.com/repos/devleague/100-Specs/commits?author=theRemix
  ```
  
  Note: The repo above has multiple authors. If you do not specify an author param, you will receive commits by all authors of the repo.
  
13. Refactor your GET requests into a single function (call `listUserRepos` something else) that fires any GET request to the GitHub API and then displays a list of items with the data retrieved.
