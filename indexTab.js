import Cities from './src/Cities/Cities'
import City from './src/Cities/City'
import AddCity from './src/AddCity/AddCity'

import { colors } from './src/theme'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City }
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
})

const AppTabs = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
})

const Tabs = createAppContainer(AppTabs)

export default Tabs