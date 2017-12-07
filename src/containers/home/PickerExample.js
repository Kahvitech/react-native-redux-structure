import React, { Component } from 'react';
import { TouchableHighlight, View, Picker, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../../actions/actions'

let styles

class PickerExample extends Component {
    constructor(props) {
      super(props)

      this.state = {user: ''}
    }


    render() {
        console.log(this.props.appData)
        return (
        <View style={styles.container}>
          <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
            <Text style={styles.buttonText}>Load Data</Text>
          </TouchableHighlight>
          <View style={styles.mainContent}>
          {
            this.props.appData.isFetching && <Text>Loading</Text>
          }
          {
            this.props.appData.data.length ?
            <Picker selectedValue = {this.state.user} onValueChange = {value => this.setState({ user: value })}>
                {
                    this.props.appData.data.map((person, i) => {
                      console.log('personaaa', person)
                      return <Picker.Item key={i} label={person.nome} value={person.nome} />
                    })
                }
            </Picker>
           : this.props.appData.error && <Text>No data</Text>
          }
          </View>
        </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        margin: 10,
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
)(PickerExample)
