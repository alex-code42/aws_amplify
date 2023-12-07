import './App.css';
import Amplify from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';

import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
  Card,
} from "@aws-amplify/ui-react";

console.log(Button, Flex, Heading, Text, TextField, View, withAuthenticator, Image);

export default function App() {
  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
