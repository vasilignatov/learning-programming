import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.img} source={require('../assets/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onClose} color='#f31282'/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 8, 
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    img: {
        width: '40%',
        height: '25%',
    }
});