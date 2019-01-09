import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class KinderImage extends Component {
    render() {
        return (
            <View style={
                {
                    width: 100,
                    marginTop: 10
                }
            }>
                <Image
                    source={
                        this.props.imageLink
                    }

                    style={
                        {
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            alignSelf: 'center'
                        }
                    }
                />

                <Text style={
                    {
                        textAlign: 'center',
                        padding: 4,
                        color: '#000'
                    }
                }>
                    {this.props.imageTitle}
                </Text>
            </View>
        );
    }
}
