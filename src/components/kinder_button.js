import React from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export class KinderButtonFill extends React.Component {

    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={() => this.props.onPress()}>
                <Text style={
                    {
                        fontSize: 18,
                        backgroundColor: '#019BE1',
                        color: '#fff',
                        width: SCREEN_WIDTH - 80,
                        textAlign: 'center',
                        padding: 15,
                        borderRadius: 10
                    }
                }>
                    {this.props.buttonTitle}
                </Text>
            </TouchableOpacity>
        );
    }
}

export class KinderButtonStroke extends React.Component {
    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={() => this.props.onPress()}>
                <Text style={
                    {
                        fontSize: 18,
                        borderColor: "#fff",
                        borderWidth: 1,
                        color: '#fff',
                        width: SCREEN_WIDTH - 80,
                        textAlign: 'center',
                        padding: 15,
                        borderRadius: 10,
                        textShadowColor: 'rgba(0,0,0,0.5)',
                        textShadowOffset: {
                            width: 1,
                            height: 1
                        },
                        textShadowRadius: 10
                    }
                }>
                    {this.props.buttonTitle}
                </Text>
            </TouchableOpacity>
        );
    }
}