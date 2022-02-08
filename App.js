/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    Button,
    useColorScheme,
    View,
    Alert,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const Separator = () => (
        <View style={styles.separator} />
    );
    const [text, onChangeUsername] = React.useState(null);
    const [number, onChangePassword] = React.useState(null);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View style={backgroundStyle}>
                    <View>
                        <TextInput
                            style={styles2.input}
                            onChangeText={onChangeUsername}
                            value={text}
                            placeholder="Username"
                            
                        />
                        <TextInput
                            style={styles2.input}
                            onChangeText={onChangePassword}
                            value={number}
                            placeholder="Password"
                            
                        />
                    </View>
                    
                    <View>
                        <Button
                            title="LOGIN"
                            onPress={() => Alert.alert('Login Successful')}
                        />
                    </View>
                    <Separator />
                    <View>
                        
                        <Button
                            title="SIGN UP"
                            color="#f194ff"
                            onPress={() => Alert.alert('Register an Account')}
                        />
                   
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

    const styles2 = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    });



const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
