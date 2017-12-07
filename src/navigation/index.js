import { StackNavigator, TabNavigator } from 'react-navigation'
import React, { Component } from 'react';

import { Text } from 'react-native'

import FontAwesome, { Icons } from 'react-native-fontawesome'

import Pages from './pages'

import { Icon } from 'react-native-elements'

export const TabNav = TabNavigator({
    Teste: {
        screen: Pages.PageOneScreen
    },
    Teste2: {
        screen: Pages.PageOneScreen
    }
},
{
    swipeEnabled: true,
    tabBarPosition: 'top',
    backBehavior: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'white',
        labelStyle: {
            fontSize: 12
        },
        indicatorStyle: {
            backgroundColor: '#FFF',

        },
        style: {
            backgroundColor: '#4dd2ff',
        },
    }
})

export const NavBar = TabNavigator({
    Home: { screen: Pages.HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='home'
                  color={tintColor}
                  type='font-awesome' />
            )
        }
    },
    PageOne: { screen: Pages.PageOneScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='list-alt'
                  color={tintColor}
                  type='font-awesome' />
            )
        }
    },
    Teste: { screen: TabNav,
        navigationOptions: {
            tabBarLabel: 'Teste',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='dollar'
                  color={tintColor}
                  type='font-awesome' />
            )
        }
    },
    Mais: { screen: Pages.PageOneScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='navicon'
                  color={tintColor}
                  type='font-awesome' />
            )
        }
    }
},
    {
        animationEnabled: false,
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        backBehavior: false,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'white',
            tabStyle: {
                height: 50,
                padding: 0,
                margin : 0
            },
            iconStyle: {
                top: 5,
                width:25,
                height:25,
                flexGrow: 0,
                padding: 0,
                margin: 0,
            },
            labelStyle: {
                fontSize: 8,
                top: -2
            },
            indicatorStyle: {
                backgroundColor: '#FFF',
            },
            style: {
                backgroundColor: '#4dd2ff',
            },
        }
    }
)

export const SimpleApp = StackNavigator({
    Login: { screen: Pages.LoginScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Login',
            header: null,
            headerMode: 'none'
        })
    },
    Home: { screen: NavBar,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            header: null,
            headerMode: 'none'
        })
    }
},
{
    transitionConfig: () => ({
    	transitionSpec: {
    		duration: 70,
    	}
    })
})
