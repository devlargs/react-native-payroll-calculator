import React, { Component } from 'react';
import { Container, Button } from 'react-native';
import { View, Text } from 'react-native';
import { TabNavigator } from "react-navigation";

class CalculatorScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Button onPress={() => navigate('Setup')}>
                    <Text>Calculator</Text>
                </Button>
            </Container>
        );
    }
}


export default CalculatorScreen;