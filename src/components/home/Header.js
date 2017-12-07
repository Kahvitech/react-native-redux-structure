import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={styles.headerContent}>
                <View style={styles.textContent}>
                    <Text style={styles.titleText}>Header</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContent: {
        height: 90,
        backgroundColor: '#4dd2ff',
        elevation: 2
    },
    textContent: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleText: {
        fontSize: 23,
        color: '#fff'
    }
})

export default Header
