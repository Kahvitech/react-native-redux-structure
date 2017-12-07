import React, { Component } from 'react';
import { TouchableHighlight, View, Picker, Text, StyleSheet, ScrollView, Image, BackHandler } from 'react-native'

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux'
import { fetchData } from '../../actions/actions'

import Header from '../../components/home/Header'

class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: ''
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
                this.props.navigation.goBack()
                return true;
        })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('backPress')
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView style={{ marginBottom: 10 }}>
                <View style={styles.optionsContainer}>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white'
    },
    optionsContainer: {
        flex: 1,
        flexDirection: 'column',
        left: 0,
        right: 0,
        backgroundColor: 'transparent'
    }
})

mapStateToProps = (state) => {
    return {
        appData: state.appData
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
