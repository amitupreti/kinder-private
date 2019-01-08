import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    TextInput,
    StyleSheet,
    ToastAndroid,
    ScrollView,
    Image,
    Modal,
    AsyncStorage
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import Icon from 'react-native-vector-icons/Ionicons';

import KinderImage from './kinder_image';

// IMAGES
import BottleImage from '../images/bottle.jpg';
import DiaperImage from '../images/diaper.png';
import IncidentImage from '../images/incident.png';

// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get('window').width;

const Hr = () => {
    return (
        <View style={
            {
                borderBottomWidth: 1,
                borderColor: '#A1A1A1',
                marginTop: 10,
                marginBottom: 10
            }
        }></View>
    );
}

// EACH SECTION components

// Milestone Section Each Milestone
export class EachMilestone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,

            progressIndicators: [
                { label: 'O', color: '#299b95', title: 'Observed', desc: 'The milestone was observed.' },
                { label: 'NO', color: '#f45c42', title: 'Not Observed', desc: 'The milestone was not observed.' },
                { label: 'I', color: '#bc276f', title: 'Introduced', desc: 'The student was introduced to the milestone.' },
                { label: 'D', color: '#520ba3', title: 'Developing', desc: 'The student is developing this milestone.' },
                { label: 'M', color: '#1166CC', title: 'Mastered', desc: 'The student has mastered this milestone.' }
            ]
        }
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />

                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: !this.state.modalVisible })}
                >
                    <View style={
                        {
                            flexDirection: 'row',
                            backgroundColor: '#299b95',
                            padding: 10
                        }
                    }>
                        <Icon
                            name="md-close"
                            size={35}
                            color="#fff"
                            style={
                                {
                                    paddingLeft: 10
                                }
                            }
                            onPress={
                                () => {
                                    this.setState({ modalVisible: !this.state.modalVisible })
                                }
                            }
                        />
                        <View>
                            <Text style={
                                {
                                    paddingLeft: 20,
                                    fontSize: 24,
                                    color: '#FFF'
                                }
                            }>Progress Indicators</Text>
                        </View>
                    </View>

                    <View style={
                        {
                            padding: 10
                        }
                    }>
                        {
                            this.state.progressIndicators.map((item, index) => {
                                return (
                                    <TouchableHighlight key={index}>
                                        <View style={
                                            {
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginBottom: 40
                                            }
                                        }>
                                            <View>
                                                <Text style={
                                                    {
                                                        color: '#FFF',
                                                        backgroundColor: item.color,
                                                        padding: 10,
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 10,
                                                        fontSize: 18,
                                                        textAlign: 'center'
                                                    }
                                                }>{item.label}</Text>
                                            </View>

                                            <View style={
                                                {
                                                    flex: 1,
                                                    paddingLeft: 20
                                                }
                                            }>
                                                <Text style={
                                                    {
                                                        fontSize: 22,
                                                        fontWeight: 'bold'
                                                    }
                                                }>{item.title}</Text>
                                                <Text>{item.desc}</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                );
                            })
                        }
                    </View>
                </Modal>

                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#14911e',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-arrow-back"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                navigation.navigate("Milestone");
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Make Milestone</Text>
                    </View>
                </View>

                <View>
                    <View style={
                        {
                            flexDirection: 'row',
                            marginTop: 20,
                            padding: 10
                        }
                    }>
                        <View style={
                            {
                                width: 130,
                                padding: 10,
                                backgroundColor: '#e2b946',
                                borderRadius: 10
                            }
                        }>
                            <Text style={
                                {
                                    color: '#FFF',
                                    fontSize: 22,
                                    textAlign: 'center'
                                }
                            }>
                                {
                                    // GETTING LABEL FROM NAVIGATION PROPS
                                    navigation.getParam('navigationData', 'NO-Data')['label']
                                }
                            </Text>
                        </View>

                        <View style={
                            {
                                flex: 1,
                                alignSelf: 'center'
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 24,
                                    paddingLeft: 20,
                                    fontWeight: 'bold'
                                }
                            }>
                                {
                                    // GETTING NAME FROM NAVIGATION PROPS
                                    navigation.getParam('navigationData', 'NO-Data')['name']
                                }
                            </Text>
                        </View>
                    </View>

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 60,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 5,
                            paddingBottom: 5,
                            backgroundColor: '#d1d1d1'
                        }
                    }>
                        <View>
                            <Text style={
                                {
                                    fontSize: 20
                                }
                            }>Students</Text>
                        </View>

                        <View>
                            <Text style={
                                {
                                    fontSize: 20
                                }
                            }>Progress</Text>
                        </View>
                    </View>

                    <ScrollView>
                        <TouchableHighlight underlayColor='#E1E1E1' onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                            <View style={
                                {
                                    padding: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    borderBottomColor: '#e1e1e1',
                                    borderBottomWidth: 1
                                }
                            }>
                                <View style={
                                    {
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }
                                }>
                                    <Image style={
                                        {
                                            width: 80,
                                            height: 80,
                                            borderRadius: 50
                                        }
                                    } source={DiaperImage} />
                                    <Text style={
                                        {
                                            fontSize: 22,
                                            paddingLeft: 20,
                                            fontWeight: 'bold'
                                        }
                                    }>Dipesh Rai</Text>
                                </View>

                                <View style={
                                    {
                                        alignSelf: 'center',
                                        backgroundColor: '#d1d1d1',
                                        padding: 20,
                                        borderRadius: 10
                                    }
                                }>
                                    <Icon
                                        name="md-add"
                                        size={20}
                                        color="#fff"
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#77ad45',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 20,
                                textAlign: 'center'
                            }
                        }>RECORD PROGRESS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Milestone Section
export class MilestoneScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            milestoneList: [
                { label: 'ART', name: 'Arts' },
                { label: 'COG', name: 'Cognitive' },
                { label: 'COM', name: 'Communication' },
                { label: 'FM', name: 'Fine Motor' },
                { label: 'GM', name: 'Gross Motor' },
                { label: 'LIT', name: 'Literacy' },
                { label: 'SE', name: 'Social & Emotional' },
                { label: 'STEM', name: 'STEM' }
            ]
        };
    }

    render() {
        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#14911e',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-arrow-back"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Observation');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Select Milestone</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    <View style={
                        {
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: '#a1a1a1',
                            alignItems: 'center'
                        }
                    }>
                        <TextInput
                            style={
                                {
                                    flex: 1,
                                    fontSize: 24
                                }
                            }
                            placeholder="Search..." />

                        <View style={
                            {
                                borderLeftWidth: 1,
                                borderLeftColor: '#A1A1A1',
                                paddingLeft: 10
                            }
                        }>
                            <Text style={
                                {
                                    fontSize: 20
                                }
                            }>FILTER</Text>
                        </View>
                    </View>

                    <ScrollView>
                        {
                            this.state.milestoneList.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('EachMilestone', { navigationData: item })}>
                                        <View style={
                                            {
                                                flexDirection: 'row',
                                                marginTop: 20
                                            }
                                        }>
                                            <View style={
                                                {
                                                    width: 130,
                                                    padding: 10,
                                                    backgroundColor: '#e2b946',
                                                    borderRadius: 10
                                                }
                                            }>
                                                <Text style={
                                                    {
                                                        color: '#FFF',
                                                        fontSize: 22,
                                                        textAlign: 'center'
                                                    }
                                                }>{item.label}</Text>
                                            </View>

                                            <View style={
                                                {
                                                    flex: 1,
                                                    alignSelf: 'center'
                                                }
                                            }>
                                                <Text style={
                                                    {
                                                        fontSize: 24,
                                                        paddingLeft: 20,
                                                        fontWeight: 'bold'
                                                    }
                                                }>{item.name}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            </View>
        );
    }
}

// Observation Section
export class ObservationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [], // TAG STUDENTS

            // INPUT SECTIONS
            milestone: '',
            time: '12:00',
            imageSource: null,
            notes: ''
        };
    }

    componentDidMount = async () => {
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

    selectPhotoTapped = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                // IF THE RESPONSE GETS THE IMAGE URI THEN SET THE STATE
                this.setState({ imageSource: response });
            }
        });
    }

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/observation

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/observation/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'image',
                    filename: 'image.png',
                    type: 'image/png',
                    data: RNFetchBlob.wrap(this.state.imageSource.uri)
                },

                {
                    name: 'textdata',
                    data: JSON.stringify({
                        time: this.state.time,
                        notes: this.state.notes,
                        students: this.state.students,
                        milestone: this.state.milestone,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#16C',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Observation</Text>
                    </View>
                </View>

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

                    <Hr />

                    <TouchableOpacity onPress={
                        () => {
                            this.props.navigation.navigate('Milestone');
                        }
                    }>
                        <View style={
                            {
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }
                        }>
                            <View>
                                <Text style={
                                    styles.heading
                                }>Milestones</Text>
                            </View>
                            <View>
                                <Icon
                                    name="md-add-circle"
                                    color="#16C"
                                    size={35}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Time: 12:45</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-create"
                                color="#000"
                                size={35}
                            />
                        </View>
                    </View>

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                color="#16C"
                                size={35}
                                onPress={() => this.selectPhotoTapped()}
                            />
                        </View>
                    </View>

                    <View>
                        {
                            this.state.imageSource &&
                            <Image source={{ uri: this.state.imageSource.uri }} style={
                                {
                                    width: 100,
                                    height: 100
                                }
                            } />
                        }
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                placeholder="Type Notes ..."
                                onChangeText={notes => this.setState({ notes })}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#16C',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

// Notice Section
export class NoticeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            notes: '',
            imageSource: null
        };
    }

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/notice

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/notice/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'image',
                    filename: 'image.png',
                    type: 'image/png',
                    data: RNFetchBlob.wrap(this.state.imageSource.uri)
                },

                {
                    name: 'textdata',
                    data: JSON.stringify({
                        title: this.state.title,
                        notes: this.state.notes,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    // CHOOSE FROM LIBRARY
    selectPhotoTapped = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                // IF THE RESPONSE GETS THE IMAGE URI THEN SET THE STATE
                this.setState({ imageSource: response });
            }
        });
    }

    render() {
        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#16C',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Notice</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    <View>
                        <Text style={
                            styles.heading
                        }>Title</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={title => this.setState({ title })}
                            style={
                                {
                                    fontSize: 20,
                                    paddingTop: 4,
                                    paddingBottom: 4
                                }
                            } placeholder="Title ..." />
                    </View>

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                size={35}
                                color="#000"
                                onPress={
                                    () => this.selectPhotoTapped()
                                }
                            />
                        </View>
                    </View>

                    <View>
                        {
                            this.state.imageSource &&
                            <Image source={{ uri: this.state.imageSource.uri }} style={
                                {
                                    width: 100,
                                    height: 100
                                }
                            } />
                        }
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                onChangeText={notes => this.setState({ notes })}
                                numberOfLines={1}
                                placeholder="Type Notes ..."
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Notice Posted', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#16C',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Incident Screen
export class IncidentScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [], // TAG STUDENTS

            // INPUT SECTIONS
            time: '12:00',
            imageSource: null,
            title: '',
            notes: '',
        };
    }

    componentDidMount = async () => {
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

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/incident

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/incident/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'image',
                    filename: 'image.png',
                    type: 'image/png',
                    data: RNFetchBlob.wrap(this.state.imageSource.uri)
                },

                {
                    name: 'textdata',
                    data: JSON.stringify({
                        time: this.state.time,
                        title: this.state.title,
                        notes: this.state.notes,
                        students: this.state.students,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    selectPhotoTapped = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                // IF THE RESPONSE GETS THE IMAGE URI THEN SET THE STATE
                this.setState({ imageSource: response });
            }
        });
    }

    render() {
        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#16C',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Incident</Text>
                    </View>
                </View>

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

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Time: 12:45</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-create"
                                color="#000"
                                size={35}
                            />
                        </View>
                    </View>

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                color="#16C"
                                size={35}
                                onPress={() => this.selectPhotoTapped()}
                            />
                        </View>
                    </View>

                    <View>
                        {
                            this.state.imageSource &&
                            <Image source={{ uri: this.state.imageSource.uri }} style={
                                {
                                    width: 100,
                                    height: 100
                                }
                            } />
                        }
                    </View>

                    <Hr />

                    <View>
                        <Text style={
                            styles.heading
                        }>Title</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={title => this.setState({ title })}
                            style={
                                {
                                    fontSize: 20,
                                    paddingTop: 4,
                                    paddingBottom: 4
                                }
                            } placeholder="Title ..." />
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                onChangeText={notes => this.setState({ notes })}
                                placeholder="Type Notes ..."
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Incident Saved', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#16C',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Meal Screen
export class MealScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styleOptions: {
                highlightOptions: {
                    backgroundColor: '#25b2bc',
                    color: '#FFFFFF'
                },
                unhighlightOptions: {
                    backgroundColor: '#FFF',
                    color: '#333333'
                }
            },
            activeOptions: [
                { id: 0, active: true, name: 'Breakfast' },
                { id: 1, active: false, name: 'Launch' },
                { id: 2, active: false, name: 'Snack' },
                { id: 3, active: false, name: 'Dinner' }
            ],
            howMuchOptions: [
                { id: 0, active: true, name: 'Ate Well' },
                { id: 1, active: false, name: "Didnt Eat Well" },
            ],

            // FOR SENDING DATA
            students: [], // TAG STUDENTS

            // INPUT SECTIONS
            imageSource: null,
            notes: ''
        }
    }

    componentDidMount = async () => {
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

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/meal

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        const activeOption = this.state.activeOptions.filter(eachOption => {
            return eachOption['active'];
        });

        const howMuchOption = this.state.howMuchOptions.filter(eachOption => {
            return eachOption['active'];
        });

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/meal/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'image',
                    filename: 'image.png',
                    type: 'image/png',
                    data: RNFetchBlob.wrap(this.state.imageSource.uri)
                },

                {
                    name: 'textdata',
                    data: JSON.stringify({
                        notes: this.state.notes,
                        students: this.state.students,
                        activeOption,
                        howMuchOption,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    selectPhotoTapped = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                // IF THE RESPONSE GETS THE IMAGE URI THEN SET THE STATE
                this.setState({ imageSource: response });
            }
        });
    }

    highlightOptionMealType = (itemId) => {
        let activeOptions = [...this.state.activeOptions];

        activeOptions.forEach(eachOption => {
            if (itemId === eachOption['id']) {
                eachOption['active'] = true;
            } else {
                eachOption['active'] = false;
            }
        });

        this.setState({ activeOptions });
    }

    highlightOptionHowMuch = (itemId) => {
        let howMuchOptions = [...this.state.howMuchOptions];

        howMuchOptions.forEach(eachOption => {
            if (itemId === eachOption['id']) {
                eachOption['active'] = true;
            } else {
                eachOption['active'] = false;
            }
        });

        this.setState({ howMuchOptions });
    }

    render() {

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#25b2bc',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Meal</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    {/* CODE FROM HERE */}
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

                    <View style={
                        {
                            flexDirection: 'row',
                            marginTop: 10
                        }
                    }>
                        {
                            this.state.activeOptions.map(item => {
                                let itemStyle = null;
                                if (item.active === true) {
                                    itemStyle = this.state.styleOptions.highlightOptions;
                                } else {
                                    itemStyle = this.state.styleOptions.unhighlightOptions;
                                }

                                return (
                                    <TouchableOpacity onPress={() => this.highlightOptionMealType(item.id)} key={item.id} style={{
                                        flex: 1
                                    }}>
                                        <View style={[styles.options, { backgroundColor: itemStyle.backgroundColor }]}>
                                            <Text style={[styles.optionsText, { color: itemStyle.color }]}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>


                    <View style={
                        {
                            marginTop: 20
                        }
                    }>
                        <Text style={styles.heading}>
                            How Much ?
                        </Text>

                        <View style={
                            {
                                flexDirection: 'row',
                                marginTop: 10
                            }
                        }>
                            {
                                this.state.howMuchOptions.map(item => {
                                    let itemStyle = null;
                                    if (item.active === true) {
                                        itemStyle = this.state.styleOptions.highlightOptions;
                                    } else {
                                        itemStyle = this.state.styleOptions.unhighlightOptions;
                                    }
                                    return (
                                        <TouchableOpacity onPress={() => this.highlightOptionHowMuch(item.id)} key={item.id} style={{
                                            flex: 1
                                        }}>
                                            <View style={[styles.options, { backgroundColor: itemStyle.backgroundColor }]}>
                                                <Text style={[styles.optionsText, { color: itemStyle.color }]}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                    </View>

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                size={35}
                                color="#000"
                                onPress={() => this.selectPhotoTapped()}
                            />
                        </View>
                    </View>

                    <View>
                        {
                            this.state.imageSource &&
                            <Image source={{ uri: this.state.imageSource.uri }} style={
                                {
                                    width: 100,
                                    height: 100
                                }
                            } />
                        }
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                placeholder="Type Optional Notes ..."
                                onChangeText={notes => this.setState({ notes })}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#25b2bc',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Milk Screen
export class MilkScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styleOptions: {
                highlightOptions: {
                    backgroundColor: '#25b2bc',
                    color: '#FFFFFF'
                },
                unhighlightOptions: {
                    backgroundColor: '#FFF',
                    color: '#333333'
                }
            },
            volOfMilk: [
                { id: 0, active: true, name: 'Ounces' },
                { id: 1, active: false, name: 'Litre' },
                { id: 2, active: false, name: 'ml' }
            ],

            // FOR SENDING DATA
            students: [], // TAG STUDENTS

            // INPUT SECTIONS
            imageSource: null,
            notes: '',
            time: '12:00'
        }
    }

    componentDidMount = async () => {
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

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/milk

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        const volOfMilk = this.state.volOfMilk.filter(eachOption => {
            return eachOption['active'];
        });

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/milk/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'image',
                    filename: 'image.png',
                    type: 'image/png',
                    data: RNFetchBlob.wrap(this.state.imageSource.uri)
                },

                {
                    name: 'textdata',
                    data: JSON.stringify({
                        notes: this.state.notes,
                        students: this.state.students,
                        time: this.state.time,
                        volOfMilk,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    selectPhotoTapped = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                // IF THE RESPONSE GETS THE IMAGE URI THEN SET THE STATE
                this.setState({ imageSource: response });
            }
        });
    }

    highlightOption = (itemId) => {
        let volOfMilk = [...this.state.volOfMilk];

        volOfMilk.forEach(eachOption => {
            if (itemId === eachOption['id']) {
                eachOption['active'] = true;
            } else {
                eachOption['active'] = false;
            }
        });

        this.setState({ volOfMilk });
    }

    render() {

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#25b2bc',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Bottle</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    {/* CODE FROM HERE */}
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

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Time: 12:45</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-create"
                                color="#000"
                                size={35}
                            />
                        </View>
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={styles.heading}>Choose Volume of Milk</Text>
                        </View>

                        <View style={
                            {
                                flexDirection: 'row',
                                marginTop: 10
                            }
                        }>
                            {
                                this.state.volOfMilk.map(item => {
                                    let itemStyle = null;
                                    if (item.active === true) {
                                        itemStyle = this.state.styleOptions.highlightOptions;
                                    } else {
                                        itemStyle = this.state.styleOptions.unhighlightOptions;
                                    }
                                    return (
                                        <TouchableOpacity onPress={() => this.highlightOption(item.id)} key={item.id} style={{
                                            flex: 1
                                        }}>
                                            <View style={[styles.options, { backgroundColor: itemStyle.backgroundColor }]}>
                                                <Text style={[styles.optionsText, { color: itemStyle.color }]}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                    </View>

                    <Hr />

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                size={35}
                                color="#000"
                                onPress={() => this.selectPhotoTapped()}
                            />
                        </View>
                    </View>

                    <View>
                        {
                            this.state.imageSource &&
                            <Image source={{ uri: this.state.imageSource.uri }} style={
                                {
                                    width: 100,
                                    height: 100
                                }
                            } />
                        }
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                placeholder="Type Optional Notes ..."
                                onChangeText={notes => this.setState({ notes })}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#25b2bc',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Nap Screen
export class NapScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // FOR SENDING DATA
            students: [], // TAG STUDENTS

            // INPUT SECTIONS
            imageSource: null,
            notes: ''
        }
    }

    componentDidMount = async () => {
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

    selectPhotoTapped = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                // IF THE RESPONSE GETS THE IMAGE URI THEN SET THE STATE
                this.setState({ imageSource: response });
            }
        });
    }

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/nap

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/nap/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'image',
                    filename: 'image.png',
                    type: 'image/png',
                    data: RNFetchBlob.wrap(this.state.imageSource.uri)
                },

                {
                    name: 'textdata',
                    data: JSON.stringify({
                        notes: this.state.notes,
                        students: this.state.students,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#77ad45',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Nap</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    {/* CODE FROM HERE */}

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

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                size={35}
                                color="#000"
                                onPress={() => this.selectPhotoTapped()}
                            />
                        </View>
                    </View>

                    <View>
                        {
                            this.state.imageSource &&
                            <Image source={{ uri: this.state.imageSource.uri }} style={
                                {
                                    width: 100,
                                    height: 100
                                }
                            } />
                        }
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                placeholder="Type Optional Notes ..."
                                onChangeText={notes => this.setState({ notes })}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#77ad45',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Medicine Screen
export class MedsScreen extends Component {
    render() {

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#77ad45',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Medicine</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    {/* CODE FROM HERE */}

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
                            <KinderImage imageLink={BottleImage} imageTitle="Ram" />
                            <KinderImage imageLink={DiaperImage} imageTitle="Shyam" />
                            <KinderImage imageLink={IncidentImage} imageTitle="Hari" />
                        </View>
                    </View>

                    <View style={
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }
                    }>
                        <View>
                            <Text style={
                                styles.heading
                            }>Photos</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-camera"
                                size={35}
                                color="#000"
                            />
                        </View>
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                placeholder="Type Optional Notes ..."
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#77ad45',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// Diaper Screen
export class DiaperScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleOptions: {
                highlightOptions: {
                    backgroundColor: '#dd5f40',
                    color: '#FFFFFF'
                },
                unhighlightOptions: {
                    backgroundColor: '#FFF',
                    color: '#333333'
                }
            },
            diaperChanged: [
                { id: 0, active: true, name: 'Changed' },
                { id: 1, active: false, name: 'Didnt Change' }
            ],

            // FOR SENDING DATA
            students: [], // TAG STUDENTS

            // INPUT SECTIONS
            num_diapers: 0,
            notes: ''
        }
    }

    componentDidMount = async () => {
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

    highlightOptionChange = (itemId) => {
        let diaperChanged = [...this.state.diaperChanged];

        diaperChanged.forEach(eachOption => {
            if (itemId === eachOption['id']) {
                eachOption['active'] = true;
            } else {
                eachOption['active'] = false;
            }
        });

        this.setState({ diaperChanged });
    }

    // SAVE DATA TO DATABASE
    saveData = async () => {
        // SEND THE DATA TO SERVER http://192.168.1.143:3000/post/diaper

        const loginEmail = await AsyncStorage.getItem("loginEmail");

        const diaperChanged = this.state.diaperChanged.filter(eachOption => {
            return eachOption['active'];
        });

        RNFetchBlob.fetch('POST', 'http://192.168.1.143:3000/post/diaper/',
            {
                Authorization: "Bearer access-token",
                'Content-Type': 'multipart/form-data'
            },
            [
                {
                    name: 'textdata',
                    data: JSON.stringify({
                        notes: this.state.notes,
                        students: this.state.students,
                        diaperChanged,
                        num_diapers: this.state.num_diapers,
                        loginEmail
                    })
                }
            ]).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {

        return (
            <View style={
                {
                    flex: 1
                }
            }>
                <StatusBar hidden={true} />
                <View style={
                    {
                        flexDirection: 'row',
                        backgroundColor: '#dd5f40',
                        padding: 10
                    }
                }>
                    <Icon
                        name="md-close"
                        size={35}
                        color="#fff"
                        style={
                            {
                                paddingLeft: 10
                            }
                        }
                        onPress={
                            () => {
                                this.props.navigation.navigate('Home');
                            }
                        }
                    />
                    <View>
                        <Text style={
                            {
                                paddingLeft: 20,
                                fontSize: 24,
                                color: '#FFF'
                            }
                        }>Diaper</Text>
                    </View>
                </View>

                <View style={
                    {
                        padding: 10
                    }
                }>
                    {/* CODE FROM HERE */}

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

                    <View style={
                        {
                            flexDirection: 'row',
                            marginTop: 10
                        }
                    }>
                        {
                            this.state.diaperChanged.map(item => {
                                let itemStyle = null;
                                if (item.active === true) {
                                    itemStyle = this.state.styleOptions.highlightOptions;
                                } else {
                                    itemStyle = this.state.styleOptions.unhighlightOptions;
                                }
                                return (
                                    <TouchableOpacity onPress={() => this.highlightOptionChange(item.id)} key={item.id} style={{
                                        flex: 1
                                    }}>
                                        <View style={[styles.options, { backgroundColor: itemStyle.backgroundColor }]}>
                                            <Text style={[styles.optionsText, { color: itemStyle.color }]}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={styles.heading}>How many diapers changed?</Text>
                        </View>
                        <View>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Number of Diapers"
                                onChangeText={num_diapers => this.setState({ num_diapers })}
                            />
                        </View>
                    </View>

                    <Hr />

                    <View>
                        <View>
                            <Text style={
                                styles.heading
                            }>Notes</Text>
                        </View>
                        <View>
                            <TextInput
                                numberOfLines={1}
                                placeholder="Type Optional Notes ..."
                                onChangeText={notes => this.setState({ notes })}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }
                }
                    onPress={
                        () => {
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
                            this.saveData();
                        }
                    }
                >
                    <View style={
                        {
                            backgroundColor: '#dd5f40',
                            fontSize: 30,
                            color: '#fff',
                            textAlign: 'center',
                            padding: 10,
                            width: SCREEN_WIDTH,
                        }
                    }>
                        <Text style={
                            {
                                color: '#fff',
                                fontSize: 30,
                                textAlign: 'center'
                            }
                        }>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

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
