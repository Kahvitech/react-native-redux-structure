import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Alert,
    TouchableHighlight,
    StatusBar,
    ActivityIndicator
} from 'react-native'
import Orientation from 'react-native-orientation'

import { connect } from 'react-redux'

import LoginProcess from './loginProcess'
import { validateLoginAuth, resetActions } from '../../actions/loginActions'

import Header from '../../components/home/Header'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: undefined
        }
    }

    componentWillMount() {
        Orientation.lockToPortrait();
        this.props.resetActions()
    }

    render() {
        const { errorMessage } = this.state;
        const { style } = this.props;

        return (
            <View style={styles.loginContent}>
                {this.props.userAuth.startingAuth && <View style={styles.loginNotifyContent}>
                        <ActivityIndicator
                            color="#4dd2ff"
                            size="large"
                        />
                        <View style={{ top: 10 }}>
                            {
                                this.props.userAuth.startingAuth &&
                                    <Text style={{ fontSize: 15, color: '#fff'}}>LOGANDO</Text>
                            }
                            {
                                this.props.userAuth.userAuthenticated &&
                                    <Text style={{ color: '#fff'}}>LOGADO COM SUCESSO</Text>
                            }
                        </View>
                </View>}
                <View style={styles.userContent}>
                    <Text style={{ paddingBottom: 55, fontSize: 25, color: 'rgba(0,0,0,0.4)'}}>
                        POC <Text style={{ fontSize: 28, color: '#4dd2ff'}}>Test</Text>
                    </Text>
                    <View style={{ paddingBottom: 25}}>
                    <TextInput
                     style={styles.userText}
                     placeholder="Usuário"
                     placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                     underlineColorAndroid='transparent'
                     onChangeText={value => this.setState({ username: value })}
                     value={this.state.username}
                    />
                    </View>
                    <View style={{ paddingBottom: 25}}>
                        <TextInput
                         style={styles.userText}
                         placeholder="Senha"
                         secureTextEntry={true}
                         placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
                         underlineColorAndroid='transparent'
                         onChangeText={value => this.setState({ password: value })}
                         value={this.state.password}
                        />
                    </View>
                    <LoginProcess
                     nav={this.props.navigation}
                     validLogin={this.props.validateLoginAuth}
                     userAuth={this.props.userAuth.userAuthenticated}
                     username={this.state.username}
                     password={this.state.password}
                    />
                    {
                        this.props.userAuth.authError && !this.props.userAuth.passwordInvalid &&
                            <Text>USUARIO OU SENHA INVÁLIDOS</Text>
                    }
                    {
                        this.props.userAuth.authError && this.props.userAuth.passwordInvalid &&
                            <Text>SENHA INVÁLIDA</Text>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContent: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f2f2f2',
    },
    loginNotifyContent: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 2
    },
    userContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    userText: {
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        elevation: 1
    },
    textPoweredContent: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        height: 50
    }
})

mapStateToProps = (state) => {
    return {
        userAuth: state.userAuth
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        resetActions: () => dispatch(resetActions()),
        validateLoginAuth: (username, password) => dispatch(validateLoginAuth(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
