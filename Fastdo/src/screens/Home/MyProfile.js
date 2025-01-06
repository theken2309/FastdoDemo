import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Profile</Text>
            {/* Add more profile details here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MyProfileScreen;