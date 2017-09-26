import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { 
    Container, 
    Button,
    Card,
    CardItem,
    Body,
    Text,
    Content,
    Item,
    Input
} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
// import CalculatorScreen from './screens/calculator';
// import Recent from './screens/recent';
// import Table from './screens/table';

class Calculator extends Component {
    static navigationOptions = {
        tabBarLabel: 'Calculator',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Button block success onPress={() => navigate('Table')}>
                    <Icon name="ios-person" size={30} color="#4F8EF7" />
                </Button>


                <Content>
                    {/* <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                        Login with Facebook
                    </Icon.Button> */}
                </Content>
            </Container>
        );
    }
}

class Recent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Recent',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Button block success onPress={() => navigate('Calculator')}>
                    <Text>Go to Calcultor</Text>
                </Button>
            </Container>
        );
    }
}

class Table extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Table',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Button block success onPress={() => navigate('Recent')}>
                    <Text>Go to Recent</Text>
                </Button>
            </Container>
        );
    }
}

export default TabNavigator({
    Calculator: {
        screen: Calculator,
        navigationOptions: {
            tabBarLabel: 'Calculator',
            tabBarIcon: ({ tintColor = 'blue' }) => (<Icon name='home' size={25} color={tintColor} />)
        }
    },
    Recent: { screen: Recent },
    Table: { screen: Table }
}, {
        tabBarPosition: 'bottom'
    });