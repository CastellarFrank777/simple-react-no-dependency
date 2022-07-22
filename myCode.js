'use strict';

const e = React.createElement;
const delay = ms => new Promise(res => setTimeout(res, ms));

class MyButton extends React.Component {
  state = { clicked: false };

  render = () => {
    if (this.state.clicked) {
      return this.props.clickedText;
    }

    return e(
      'button',
      { onClick: this.clickedEvent },
      this.props.name
    );
  }

  clickedEvent = async () => {
    this.setState({clicked: true});
    await this.props.loadUsersHandler();
    this.setState({clicked: false});
  };
}
MyButton.defaultProps = {
  name: "Button",
  clickedText: "Loading..."
}

class MainPage extends React.Component {
  state = { users: [] };

  render = () => {
    return e("div", { className: "main-wrapper" },
      e("h1", null, "Simple Users List Page"),
      e(MyButton, { name: "Load Users", loadUsersHandler: this.loadUsersAction })
    )
  }

  loadUsersAction = async () => {
    // We will need to fetch users here, take a look to the apiClient methods and re-render accordingly.
    await delay(3000);
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(MainPage));