import React, { Component } from "react";
import firebase from "../../firebase";
import { Grid, Header, Icon, GridColumn, Dropdown } from "semantic-ui-react";

class UserPanel extends Component {
  state = {
    user: this.props.currentUser
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Chage Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed Out!"))
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Grid style={{ backgroud: "#4c3c4c" }}>
        <GridColumn>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevSlack</Header.Content>
            </Header>
          </Grid.Row>

          {/* User Dropdown */}
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown
              trigger={<span>{this.state.user.displayName}</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </GridColumn>
      </Grid>
    );
  }
}

export default UserPanel;
