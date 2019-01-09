import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
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
                        marginTop: 10,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginLeft: 10,
                        marginRight: 10
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
                <TouchableOpacity onPress={() => this._removeData()} style={
                    {
                        position: 'absolute',
                        bottom: 80,
                        right: 10
                    }
                }>
                    <Text style={
                        {
                            backgroundColor: '#f42731',
                            padding: 10,
                            borderRadius: 5,
                            color: '#FFF'
                        }
                    }>
                        Log Out
                    </Text>
                </TouchableOpacity>

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

            studentsCheckedIn: [], // TO GET STUDENTS CHECKED IN OR NOT
            studentsCheckedOut: [], // TO GET STUDENTS CHECKED OUT

            // INPUT FIELDS
            time: '12:00'
        };
    }

    componentDidMount = () => {
        this.showStudents();
    }

    showStudents = async () => {
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

                        // CHECK TODAYS ATTENDANCE WHETHER STUDENTS ARE CHECKED IN OR NOT
                        let obj = { studentName, studentId, studentSelected };

                        fetch("http://192.168.1.143:3000/attendance/" + studentId)
                            .then(res => res.json())
                            .then(response => {
                                if (response.length) {
                                    if (response[0].attendance_checkedin === 1 && response[0].attendance_checkedout === 0) {
                                        let studentsCheckedIn = [...this.state.studentsCheckedIn];
                                        studentsCheckedIn.push(studentId);
                                        studentsCheckedInFiltered = [...new Set(studentsCheckedIn)];
                                        this.setState({ studentsCheckedIn: studentsCheckedInFiltered });
                                    } else if (response[0].attendance_checkedin === 1 && response[0].attendance_checkedout === 1) {
                                        let studentsCheckedOut = [...this.state.studentsCheckedOut];
                                        studentsCheckedOut.push(studentId);
                                        studentsCheckedOutFiltered = [...new Set(studentsCheckedOut)];
                                        this.setState({ studentsCheckedOut: studentsCheckedOutFiltered });
                                    }
                                }
                            });

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

    check = async (type) => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/diaper

        fetch("http://192.168.1.143:3000/attendance/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                students: this.state.students,
                studentsCheckedIn: this.state.studentsCheckedIn,
                type,
                time: this.state.time
            })
        })
            .then(res => res.json())
            .then(response => {
                this.showStudents();
            })
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
                                    <TouchableOpacity key={index} onPress={() => {
                                        if (this.state.studentsCheckedOut.indexOf(student.studentId) !== -1) {
                                            return false;
                                        }
                                        this.makeSelection(student.studentId);
                                    }
                                    }>
                                        <KinderImage imageLink={BottleImage} imageTitle={student.studentName} />
                                        {
                                            this.state.studentsCheckedIn.indexOf(student.studentId) !== -1 &&
                                            <Text style={styles.checkedIn}>
                                                Checked In
                                            </Text>
                                        }

                                        {
                                            this.state.studentsCheckedOut.indexOf(student.studentId) !== -1 &&
                                            <Text style={styles.checkedOut}>
                                                Checked Out
                                            </Text>
                                        }

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

                <View style={
                    {
                        marginTop: 40
                    }
                }>
                    <View style={
                        {
                            padding: 10
                        }
                    }>
                        <Button title="CHECK IN" color="#16C" onPress={() => this.check("checkIn")} />
                    </View>

                    <View style={
                        {
                            padding: 10
                        }
                    }>
                        <Button title="CHECK OUT" color="#e23152" onPress={() => this.check("checkOut")} />
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
    },
    checkedIn: {
        backgroundColor: '#16C',
        color: '#FFF',
        textAlign: 'center',
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2
    },
    checkedOut: {
        backgroundColor: '#e23152',
        color: '#FFF',
        textAlign: 'center',
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2
    }
});
