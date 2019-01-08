import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    AsyncStorage,
    StyleSheet,
    BackHandler,
    ToastAndroid
} from 'react-native';

// COMPONENTS FOR INDIVIDIUAL SECTIONS
import Icon from 'react-native-vector-icons/Ionicons';
// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get('window').width;

// CAMERA COMPONENT
// import { RNCamera } from 'react-native-camera';

import { createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';

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

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        ToastAndroid.show('YOU CANNOT GO BACK', ToastAndroid.SHORT);
        return true;
    }

    _retrieveData = async () => {
        try {
            const loginEmail = await AsyncStorage.getItem("loginEmail");
            const loginType = await AsyncStorage.getItem("loginType");

            if (loginEmail !== null && loginType !== null) {
                // IF DATA AVAILABLE IN AsyncStorage
            }
        } catch (error) {
            throw error;
        }
    }

    _removeData = async () => {
        try {
            await AsyncStorage.multiRemove(["loginEmail", "loginType"], function (error) {
                if (error) throw error;
            });
        } catch (error) {
            throw error;
        }
    }

    logOut = () => {
        this._removeData();
    }

    render() {
        this._retrieveData();

        return (
            <View style={
                {
                    flex: 1
                }
            }>
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

class AttendanceScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [], // TAG STUDENTS
        };
    }

    componentDidMount = async () => {
        try {
            const loginEmail = await AsyncStorage.getItem("loginEmail");

            // GET ALL THE STUDENTS FOR LOGGED STAFF
            fetch("http://192.168.1.143:3000/post/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ loginEmail })
            })
                .then(res => res.json())
                .then(response => {

                    let students = [];

                    response.forEach(eachRow => {
                        let studentName = eachRow.student_name;
                        let studentId = eachRow.student_id;
                        let studentSelected = false;

                        let obj = { studentName, studentId, studentSelected };

                        students.push(obj);
                    });

                    this.setState({ students });
                })
                .catch(error => alert("ERROR"));
        } catch (error) {
            console.log(error);
        }
    }

    // TAG STUDENTS
    makeSelection = (studentId) => {
        // MAKE SELECTION
        let students = [...this.state.students];
        students.forEach(eachStudent => {
            if (eachStudent.studentId === studentId) {
                eachStudent.studentSelected = !eachStudent.studentSelected;
            }
        });
        this.setState({ students });
    }

    render() {
        return (
            <View>
                <View style={
                    {
                        padding: 10
                    }
                }>
                    <View>
                        <Text style={styles.heading}>
                            Tag Students
                    </Text>

                        <View style={
                            {
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }
                        }>
                            {
                                this.state.students.map((student, index) => (
                                    <TouchableOpacity key={index} onPress={() => this.makeSelection(student.studentId)}>
                                        <KinderImage imageLink={BottleImage} imageTitle={student.studentName} />
                                        {
                                            student.studentSelected &&
                                            <Text style={styles.studentSelected}>SELECTED</Text>
                                        }
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </View>
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

const TeacherHomePageTabNavigator = createMaterialTopTabNavigator({
    Activities: {
        screen: HomeScreen
    },
    Attendance: {
        screen: AttendanceScreen
    },
    Message: {
        screen: MessageScreen
    }
}, {
        initialRouteName: 'Attendance'
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
        initialRouteName: 'Home',
        drawerLockMode: 'locked-closed'
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

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    options: {
        padding: 8,
        borderWidth: 0.5,
        borderColor: '#25b2bc'
    },
    optionsText: {
        textAlign: 'center',
        fontSize: 18
    },

    studentSelected: {
        textAlign: 'center',
        color: '#16C'
    }
});
