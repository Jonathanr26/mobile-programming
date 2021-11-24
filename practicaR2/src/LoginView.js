import React, {Component} from 'react';
import { StyleSheet, Button, TextInput, Image, Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      userError: undefined,
      password: '',
      passwordError: undefined,
    };
  }
  isValid(value) {
    return value.length > 0;
  }
  getLogin = () => {
    const { user, password } = this.state;
    const userValidation = this.isValid(user);
    const passwordValidation = this.isValid(password);
    this.setState({
      ...this.state,
      userError: userValidation
        ? undefined
        : 'Usuario no ingresado',
      passwordError: passwordValidation
        ? undefined
        : 'Contraseña no ingresada',
    });
    if (userValidation && passwordValidation)
      Actions.home({ user: this.state.user });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/logo.png')}
          style={{ 
            width: 200, 
            height: 200, 
            marginBottom: 30, 
            borderRadius: 15 }}
        />
        <View style={{
                marginBottom: 20,
                width: '70%',
              }}>
          <TextInput
            style={{
              borderRadius: 5,
              padding: 10,
              height: 40,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
            }}
            value={this.state.user}
            onChangeText={(text) =>
              this.setState({ ...this.state, user: text })
            }
            placeholder= "Usuario"
          />
          {this.state.userError && (
            <Text style={styles.error}>
              {this.state.userError}
            </Text>
          )}
        </View>
        <View style={{
                marginBottom: 20,
                width: '70%',
              }}>
          <TextInput
            style={{
              borderRadius: 5,
              padding: 10,
              height: 40,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
            }}
            value={this.state.password}
            onChangeText={(text) =>
              this.setState({ ...this.state, password: text })
            }
            placeholder= "Contraseña"
          />
          {this.state.passwordError && (
            <Text style={styles.error}>
              {this.state.passwordError}
            </Text>
          )}
        </View>
        {this.state.error && (
          <Text style={styles.error}>
            {this.state.error}
          </Text>
        )}
        <Button 
          onPress={this.getLogin}
          title='Iniciar'
          color='#ffb6c1'
          accessibilityLabel='Login button'
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
  },
});
