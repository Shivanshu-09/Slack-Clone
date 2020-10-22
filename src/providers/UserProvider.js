import React, { Component, createContext } from 'react';
import { auth, createOrGetUserProfileDocument } from '../firebase';

// Creating a context which can be available to any component
const initialUserState = { user: null, loading: false };

export const UserContext = createContext(initialUserState);

export default class UserProvider extends Component {
  state = initialUserState;

  async componentDidMount() {
    // Will be fired whenever you go from logged in to logged out or vice versa
    auth.onAuthStateChanged(async (userAuth) => {
      console.log(
        'UserProvider ----> componentDidMount ----> userAuth',
        userAuth
      );

      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);
        // console.log('userRef', userRef);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
    });
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {/* // App component and its descendants are the children of UserProvider ,
        so they will be able to access "value" */}
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
