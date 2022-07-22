# simple-react-no-dependency

## Summary
This is just a really simple react application with no package manager dependencies, that means that you can just open the index.html and the base page should work correctly.

## Exercise
You need to create a simple page to display Users information.

- You will add a button named "Load Users" whenever you click that button you will display a list of users comming from an API, displaying the "FirtName LastName" as the label for each item inside the list.

- Each listed user should be clickleable and when you click one user it will expand additional information from the user right below the item itself or to the side of the list (whichever you prefer); it will display any additional information like email, gender, phone, etc.

- You can take a look to the "apiClient.js" file which already has two JS methods in place that you can use to get the information from the API.

## Keep in mind
We recommend you to create your own simple react-app project from scratch potentially using the following commands:

```sh
npx create-react-app my-app
cd my-app
npm start
```

So you can have a scratch project with normal react functionalities. However, if you have uses running the previous commands you can download this repository and use it as your base repo to do the exercise, however there are a few considerations to keep in mind.

- You can't use JSX in this repo, you will need to use the React.createElement method instead.

- If you add additional JS files you can just reference those in the index.html page directly to load them properly and use them, since you don't have a normal module import/export functionality.

- You only have access to React and React-DOM libraries and can't install additional packages.