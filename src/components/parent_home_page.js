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
    StyleSheet,
    AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import BackgroundImage from '../../images/Background.jpg';

// FOR IMAGES
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

const SCREEN_WIDTH = Dimensions.get('window').width;

// DISPLAY IMAGES
class CustomImage extends Component {

    render() {
        return (
            <Image
                source={
                    { uri: 'http://192.168.1.143:3000/' + this.props.imageName }
                }
                style={styles.image} />
        );
    }
}

class ParentHomePageScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: 'allactivities',

            // FETCHED FROM SERVER
            studentName: 'Loading...',

            // ALL THE POSTS
            notice: [],
            incident: [],
            meal: [],
            milk: [],
            nap: [],
            diaper: [],
            observation: [],

            // SHOWING THE CATEGORIES
            categories: [
                { key: "notice", active: true },
                { key: "incident", active: true },
                { key: "meal", active: true },
                { key: "milk", active: true },
                { key: "nap", active: true },
                { key: "diaper", active: true },
                { key: "observation", active: true }
            ]
        };
    }

    componentDidMount = () => {

        AsyncStorage.getItem("loginEmail")
            .then(loginEmail => {

                // GET USER DETAILS i.e. name and photo
                this._getUserDetails();

                // FETCH ALL DATA FROM SERVER
                this.getAllData();
            })
            .catch(err => {
                console.error(err);
            });
    }

    _getUserDetails = async () => {
        // GET STUDENT NAME AND SET THE studentName
        try {
            const loginEmail = await AsyncStorage.getItem("loginEmail");

            this.setState({ loginEmail })
            const response = await fetch("http://192.168.1.143:3000/parent/student/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    studentEmail: loginEmail
                })
            });
            const responseJSON = await response.json();
            const studentName = responseJSON['studentName'];

            this.setState({ studentName });
        } catch (error) {
            throw err;
        }
    }

    getAllData = async () => {
        try {
            const loginEmail = await AsyncStorage.getItem("loginEmail");

            const { categories } = this.state;

            let activeCategories = categories.filter(eachCategory => {
                return eachCategory['active'];
            });

            activeCategories.forEach(eachCategory => {
                // FETCH ALL THE DATA FROM SERVER
                fetch("http://192.168.1.143:3000/post/" + eachCategory.key + "/" + loginEmail)
                    .then(res => res.json())
                    .then(response => {
                        this.setState({ [eachCategory.key]: response });
                    })
                    .catch(error => {
                        throw error;
                    });
            });
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

    filterData = (itemValue) => {
        // SET THE PICKER VALUE TO SELECTED VALUE
        this.setState({ selectedItem: itemValue });

        // RESET THE CATEGORIES ACCORDING TO SELECTION
        let categories = [...this.state.categories];

        if (itemValue === "allactivities") {
            categories.forEach(eachCategory => {
                eachCategory['active'] = true;
            });
        } else {
            categories.forEach(eachCategory => {
                if (itemValue === eachCategory['key']) {
                    eachCategory['active'] = true;
                } else {
                    eachCategory['active'] = false;
                }
            });
            this.setState({ categories });
        }
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
                                    }>
                                        {
                                            this.state.studentName
                                        }
                                    </Text>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => this._removeData()}>
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
                                        onValueChange={itemValue => {
                                            this.filterData(itemValue);
                                        }}>
                                        <Picker.Item label="All Activities" value="allactivities" />
                                        <Picker.Item label="Notice" value="notice" />
                                        <Picker.Item label="Incident" value="incident" />
                                        <Picker.Item label="Meal" value="meal" />
                                        <Picker.Item label="Milk" value="milk" />
                                        <Picker.Item label="Nap" value="nap" />
                                        <Picker.Item label="Diaper" value="diaper" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View>

                            {
                                // IF THERE ARE ANY NOTICE THEN
                                this.state.notice.length !== 0 &&
                                this.state.categories[0]['active'] &&
                                this.state.notice.map((eachNotice, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={NoticeImage} style={
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
                                                        }>
                                                            Notice
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachNotice['notice_time']
                                                            }
                                                        </Text>
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
                                                    {
                                                        eachNotice['notice_title']
                                                    }
                                                </Text>

                                                <Text style={styles.description}>
                                                    {
                                                        eachNotice['notice_note']
                                                    }
                                                </Text>

                                                <CustomImage imageName={eachNotice['notice_photo']} />
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
                                    )
                                })
                            }

                            {
                                // IF THERE ARE ANY INCIDENT THEN
                                this.state.incident.length !== 0 &&
                                this.state.categories[1]['active'] &&
                                this.state.incident.map((eachIncident, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={IncidentImage} style={
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
                                                        }>
                                                            Incident
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachIncident['incident_time']
                                                            }
                                                        </Text>
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
                                                    {
                                                        eachIncident['incident_title']
                                                    }
                                                </Text>

                                                <Text style={styles.description}>
                                                    {
                                                        eachIncident['incident_note']
                                                    }
                                                </Text>

                                                <CustomImage imageName={eachIncident['incident_photo']} />
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
                                    )
                                })
                            }

                            {
                                // IF THERE ARE ANY MEAL THEN
                                this.state.meal.length !== 0 &&
                                this.state.categories[2]['active'] &&
                                this.state.meal.map((eachMeal, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={MealImage} style={
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
                                                        }>
                                                            Meal
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachMeal['meal_time']
                                                            }
                                                        </Text>
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
                                                    {
                                                        eachMeal['meal_type']
                                                    }
                                                </Text>

                                                <Text style={styles.description}>
                                                    {
                                                        eachMeal['meal_note']
                                                    }
                                                </Text>

                                                <CustomImage imageName={eachMeal['meal_photo']} />
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
                                    )
                                })
                            }

                            {
                                // IF THERE ARE ANY MILK THEN
                                this.state.milk.length !== 0 &&
                                this.state.categories[3]['active'] &&
                                this.state.milk.map((eachMilk, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={BottleImage} style={
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
                                                        }>
                                                            Milk
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachMilk['milk_time']
                                                            }
                                                        </Text>
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
                                                    {
                                                        eachMilk['milk_vol']
                                                    }
                                                </Text>

                                                <Text style={styles.description}>
                                                    {
                                                        eachMilk['milk_note']
                                                    }
                                                </Text>

                                                <CustomImage imageName={eachMilk['milk_photo']} />
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
                                    )
                                })
                            }

                            {
                                // IF THERE ARE ANY NAP THEN
                                this.state.nap.length !== 0 &&
                                this.state.categories[4]['active'] &&
                                this.state.nap.map((eachNap, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={BottleImage} style={
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
                                                        }>
                                                            Nap
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachNap['nap_time']
                                                            }
                                                        </Text>
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

                                                <Text style={styles.description}>
                                                    {
                                                        eachNap['nap_note']
                                                    }
                                                </Text>

                                                <CustomImage imageName={eachNap['nap_photo']} />
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
                                    )
                                })
                            }

                            {
                                // IF THERE ARE ANY DIAPER THEN
                                this.state.diaper.length !== 0 &&
                                this.state.categories[5]['active'] &&
                                this.state.diaper.map((eachDiaper, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={BottleImage} style={
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
                                                        }>
                                                            Diaper
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachDiaper['diaper_time']
                                                            }
                                                        </Text>
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

                                                <Text style={styles.description}>
                                                    {
                                                        eachDiaper['diaper_change']
                                                    }
                                                </Text>

                                                <Text style={styles.description}>
                                                    {
                                                        eachDiaper['diaper_note']
                                                    }
                                                </Text>

                                                <Text style={{
                                                    backgroundColor: '#16C',
                                                    color: 'white',
                                                    borderRadius: 5,
                                                    padding: 10,
                                                    margin: 5
                                                }}>
                                                    {
                                                        eachDiaper['diaper_num']
                                                    }
                                                </Text>
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
                                    )
                                })
                            }

                            {
                                // IF THERE ARE ANY OBSERVATION THEN
                                this.state.observation.length !== 0 &&
                                this.state.categories[6]['active'] &&
                                this.state.observation.map((eachObservation, index) => {
                                    return (
                                        <View key={index} style={
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
                                                        <Image source={ObservationImage} style={
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
                                                        }>
                                                            Observation
                                                        </Text>
                                                        <Text>
                                                            {
                                                                eachObservation['observation_time']
                                                            }
                                                        </Text>
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

                                                <Text style={styles.description}>
                                                    {
                                                        eachObservation['observation_note']
                                                    }
                                                </Text>

                                                <CustomImage imageName={eachObservation['observation_photo']} />
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
                                    )
                                })
                            }
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