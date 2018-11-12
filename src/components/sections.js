import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    TextInput,
    StyleSheet,
    ToastAndroid
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
