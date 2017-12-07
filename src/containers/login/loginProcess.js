import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text
} from 'react-native';

class LoginProcess extends Component {
    constructor(props) {
      super(props);

      this.navigation = this.props.nav
      this.validateLogin = this.props.validLogin
      this.userAuthenticated
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.userAuth) this.navigation.navigate('Home')
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                onPress={() => {
                    this.validateLogin(this.props.username, this.props.password)
                }}>
                    <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4dd2ff', width: 120, height: 60 }}
                    >
                        <Text>ENTRAR</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});


export default LoginProcess;
