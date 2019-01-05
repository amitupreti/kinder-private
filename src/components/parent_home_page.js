import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    Picker,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import DiaperImage from '../images/diaper.png';
import BackgroundImage from '../../images/Background.jpg';

const SCREEN_WIDTH = Dimensions.get('window').width;


class ParentHomePageScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: 'allactivities'
        };
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true} />

                <ScrollView>
                    <View style={
                        {
                            padding: 5,
                            backgroundColor: "#c1c1c1"
                        }
                    }>
                        <View style={
                            {
                                backgroundColor: '#737376',
                                flexDirection: 'row',
                                paddingLeft: 30,
                                paddingRight: 30,
                                paddingTop: 10,
                                paddingBottom: 20,
                                borderRadius: 5
                            }
                        }>
                            <View style={
                                {
                                    flex: 1
                                }
                            }>

                                <Image source={DiaperImage}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40,
                                        alignSelf: 'center'
                                    }}
                                />

                                <View>
                                    <Text style={
                                        {
                                            fontSize: 30,
                                            textAlign: 'center',
                                            paddingTop: 15,
                                            paddingBottom: 10,
                                            color: 'white',
                                            fontWeight: 'bold'
                                        }
                                    }>Dipesh Rai</Text>
                                </View>

                                <View>
                                    <TouchableOpacity>
                                        <View style={
                                            {
                                                padding: 14,
                                                backgroundColor: '#28A544',
                                                marginTop: 10,
                                                marginRight: 10,
                                                borderRadius: 5
                                            }
                                        }>
                                            <Text style={
                                                {
                                                    color: '#fff',
                                                    fontSize: 17,
                                                    textAlign: 'center'
                                                }
                                            }>Weekly Reports</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={
                                {
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'flex-end'
                                }
                            }>
                                <View style={
                                    {
                                        backgroundColor: '#FFF',
                                        width: 150,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        borderRadius: 5,
                                        flex: 1
                                    }
                                }>
                                    <Picker
                                        selectedValue={this.state.selectedItem}
                                        style={
                                            {
                                                width: 130,
                                                color: '#000'
                                            }
                                        }
                                        mode={"dialog"}
                                        onValueChange={(itemValue, itemIndex) => this.setState({ selectedItem: itemValue })}>
                                        <Picker.Item label="All Activities" value="allactivities" />
                                        <Picker.Item label="Photos" value="photos" />
                                        <Picker.Item label="Observations" value="observations" />
                                        <Picker.Item label="Notice" value="notice" />
                                        <Picker.Item label="Nap" value="nap" />
                                        <Picker.Item label="Food" value="food" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={
                                {
                                    backgroundColor: '#FFF',
                                    marginTop: 5,
                                    padding: 20,
                                    borderRadius: 5
                                }
                            }>
                                <View style={
                                    {
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }
                                }>
                                    <View style={
                                        {
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }
                                    }>
                                        <View>
                                            <Image source={DiaperImage} style={
                                                {
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: 30
                                                }
                                            } />
                                        </View>
                                        <View style={
                                            {
                                                paddingLeft: 10
                                            }
                                        }>
                                            <Text style={
                                                {
                                                    fontSize: 20,
                                                    color: '#16C',
                                                    fontWeight: 'bold'
                                                }
                                            }>Notice</Text>
                                            <Text>1:30 PM, 11 June</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Icon name="md-bookmark"
                                            size={35}
                                            color="#777"
                                            style={
                                                {
                                                    paddingLeft: 5
                                                }
                                            } />
                                    </View>
                                </View>

                                <View>

                                    <Text style={styles.title}>
                                        Fancy Dress Competition
                                    </Text>

                                    <Text style={styles.description}>
                                        Tomorrow we have a fancy dress competition. Please get your toddler dress up.
                                    </Text>

                                    <Image
                                        source={
                                            BackgroundImage
                                        }
                                        style={styles.image} />
                                </View>

                                <View style={styles.buttonsContainer}>
                                    <View style={styles.buttons}>
                                        <Text style={styles.buttontext}>
                                            <Icon name="md-download"
                                                size={30}
                                                color="#16C"
                                                style={
                                                    {
                                                        paddingLeft: 5
                                                    }
                                                } />
                                        </Text>
                                    </View>

                                    <View style={styles.buttons}>
                                        <Text style={styles.buttontext}>
                                            <Icon name="md-share"
                                                size={30}
                                                color="#16C"
                                                style={
                                                    {
                                                        paddingLeft: 5
                                                    }
                                                } />
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ParentHomePageScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color: '#555'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
        marginBottom: 5,
        lineHeight: 24,
    },

    image: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10
    },

    buttonsContainer: {
        flexDirection: 'row'
    },

    buttons: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        margin: 5,
        padding: 10
    },

    buttontext: {
        textAlign: 'center',

    }
});