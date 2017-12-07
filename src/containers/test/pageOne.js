import React, { Component } from 'react';
import { TouchableHighlight, View, Picker, Text, StyleSheet, ScrollView, Image } from 'react-native'

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux'
import { fetchData } from '../../actions/actions'

class PageOneScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
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
)(PageOneScreen)
