import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';

// COMPONENTS FOR INDIVIDIUAL SECTIONS

import Icon from 'react-native-vector-icons/Ionicons';
// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get('window').width;

import { createDrawerNavigator, createTabNavigator } from 'react-navigation';

// for images
import BottleImage from '../images/bottle.jpg';
import DiaperImage from '../images/diaper.png';
import IncidentImage from '../images/incident.png';
import MealImage from '../images/meal.png';
import NapImage from '../images/nap.png';
import NoticeImage from '../images/notice.png';
import ObservationImage from '../images/observation.png';
import CameraImage from '../images/photo.png';
import PottyImage from '../images/potty.png';
import VideoImage from '../images/video.png';

// IMPORTING ALL SECTIONS
import {
    NoticeScreen,
    IncidentScreen,
    MealScreen,
    MilkScreen,
    NapScreen,
    MedsScreen,
    DiaperScreen,
    ObservationScreen,
    MilestoneScreen,
    EachMilestone
} from './sections';

// Kinder Images
import KinderImage from './kinder_image';

// TeacherHomePageMain
class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: 'dipesh',

            sections: [
                { imageLink: CameraImage, imageTitle: 'Photos' },
                { imageLink: VideoImage, imageTitle: 'Video' },
                { imageLink: ObservationImage, imageTitle: 'Observation' },
                { imageLink: NoticeImage, imageTitle: 'Notice' },
                { imageLink: IncidentImage, imageTitle: 'Incident' },
                { imageLink: MealImage, imageTitle: 'Meal' },
                { imageLink: BottleImage, imageTitle: 'Milk' },
                { imageLink: NapImage, imageTitle: 'Nap' },
                { imageLink: DiaperImage, imageTitle: 'Diaper' }
            ]
        }
    }

    _retrieveData = async () => {
        try {
            const loginEmail = await AsyncStorage.getItem("loginEmail");
            const loginId = await AsyncStorage.getItem("loginId");
            const loginType = await AsyncStorage.getItem("loginType");

            if (loginEmail !== null && loginId !== null && loginType !== null) {
                // IF DATA AVAILABLE IN AsyncStorage


            }
        } catch (error) {
            throw error;
        }
    }

    _removeData = async () => {
        try {
            await AsyncStorage.multiRemove(["loginEmail", "loginId", "loginType"], function (error) {
                if (error) throw error;
            });
        } catch (error) {
            throw error;
        }
    }

    render() {
        this._retrieveData();

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <View style={
                    {
                        backgroundColor: '#16C',
                        height: 70,
                        elevation: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                }>
                    <StatusBar hidden={true} />
                    <View style={
                        {
                            paddingLeft: 5,
                            paddingRight: 5
                        }
                    }>
                        <Icon
                            name="md-menu"
                            size={35}
                            color="#fff"
                            style={
                                {
                                    paddingLeft: 5
                                }
                            }
                            onPress={
                                () => {
                                    this.props.navigation.openDrawer();
                                }
                            }
                        />
                    </View>

                    <View style={
                        {
                            paddingLeft: 5,
                            paddingRight: 5
                        }
                    }>
                        <Picker
                            selectedValue={this.state.selectedItem}
                            style={
                                {
                                    width: 90,
                                    color: '#fff'
                                }
                            }
                            mode={"dropdown"}
                            onValueChange={(itemValue, itemIndex) => this.setState({ selectedItem: itemValue })}>
                            <Picker.Item label="Dipesh" value="dipesh" />
                            <Picker.Item label="Amit" value="amit" />
                        </Picker>
                    </View>

                    <View style={
                        {
                            paddingLeft: 5,
                            paddingRight: 5
                        }
                    }>
                        <Text
                            style={
                                {
                                    color: '#fff',
                                    fontSize: 15
                                }
                            }
                            onPress={() => alert("Added!")}
                        >
                            Add Students
                        </Text>
                    </View>

                    <View style={
                        {
                            paddingRight: 20
                        }
                    }>
                        <Icon onPress={() => this._removeData()} name="md-settings" size={25} color="#fff" />
                    </View>
                </View>

                {/* EACH SMALL SECTIONS */}
                <View style={
                    {
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }
                }>
                    {
                        this.state.sections.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate(item.imageTitle)}>
                                    <KinderImage imageLink={item.imageLink} imageTitle={item.imageTitle} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                {/* EMERGENCY BUTTON */}
                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }>
                    <Text style={
                        {
                            backgroundColor: '#f21',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            height: 70,
                            lineHeight: 70,
                            width: SCREEN_WIDTH,

                        }
                    }>
                        Emergency
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class AttendenceScreen extends Component {
    render() {
        return (
            <View>
                <Text>Dipesh Rai</Text>
            </View>
        );
    }
}

class MessageScreen extends Component {
    render() {
        return (
            <View>
                <Text style={
                    {
                        textAlign: 'center',
                        fontSize: 30,
                        marginTop: 30
                    }
                }>On Development!!!</Text>
            </View>
        );
    }
}

const TeacherHomePageTabNavigator = createTabNavigator({
    Activities: {
        screen: HomeScreen
    },
    Attendence: {
        screen: AttendenceScreen
    },
    Message: {
        screen: MessageScreen
    }
});

const TeacherHomePageMain = createDrawerNavigator({
    Home: {
        screen: TeacherHomePageTabNavigator
    },
    Observation: {
        screen: ObservationScreen
    },
    Milestone: {
        screen: MilestoneScreen
    },
    EachMilestone: {
        screen: EachMilestone
    },
    Notice: {
        screen: NoticeScreen
    },
    Incident: {
        screen: IncidentScreen
    },
    Meal: {
        screen: MealScreen
    },
    Milk: {
        screen: MilkScreen
    },
    Nap: {
        screen: NapScreen
    },
    Meds: {
        screen: MedsScreen
    },
    Diaper: {
        screen: DiaperScreen
    }
}, {
        initialRouteName: 'Home'
    });

// TEACHER HOME PAGE MAIN EXPORT
class TeacherHomePage extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <TeacherHomePageMain />
        );
    }
}

export default TeacherHomePage;
