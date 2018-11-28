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
    Modal
} from 'react-native';

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
            modalVisible: false
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
                                navigation.goBack()
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
                                    } source={BottleImage} />
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
                            <KinderImage imageLink={BottleImage} imageTitle="Ram" />
                            <KinderImage imageLink={DiaperImage} imageTitle="Shyam" />
                            <KinderImage imageLink={IncidentImage} imageTitle="Hari" />
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
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
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
                        <TextInput style={
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
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
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
                            <KinderImage imageLink={BottleImage} imageTitle="Ram" />
                            <KinderImage imageLink={DiaperImage} imageTitle="Shyam" />
                            <KinderImage imageLink={IncidentImage} imageTitle="Hari" />
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
                            />
                        </View>
                    </View>

                    <Hr />

                    <View>
                        <Text style={
                            styles.heading
                        }>Title</Text>
                    </View>
                    <View>
                        <TextInput style={
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
                            ToastAndroid.show('Saved', ToastAndroid.SHORT);
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
                { id: 1, active: false, name: 'Didn\'t Eat Well' },
            ]
        }
    }

    highlightOption = (itemId) => {
        alert(itemId);
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
                            <KinderImage imageLink={BottleImage} imageTitle="Ram" />
                            <KinderImage imageLink={DiaperImage} imageTitle="Shyam" />
                            <KinderImage imageLink={IncidentImage} imageTitle="Hari" />
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
                                        <TouchableOpacity onPress={() => false} key={item.id} style={{
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
            ]
        }
    }

    highlightOption = (itemId) => {
        alert(itemId);
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
                                        <TouchableOpacity onPress={() => false} key={item.id} style={{
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
                { id: 1, active: false, name: 'Did\'t Change' }
            ]
        }
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
                            <KinderImage imageLink={BottleImage} imageTitle="Ram" />
                            <KinderImage imageLink={DiaperImage} imageTitle="Shyam" />
                            <KinderImage imageLink={IncidentImage} imageTitle="Hari" />
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
                                    <TouchableOpacity onPress={() => false} key={item.id} style={{
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
                            <TextInput keyboardType="numeric" placeholder="Number of Diapers" />
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
    }
});
