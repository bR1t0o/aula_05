import { StyleSheet, TextInput } from 'react-native';


const TextBox = ({ value, onChangeText, placeholder }) => {
    return (

        <TextInput
            style={textBox_style.inputText}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />

    );
};

const textBox_style = StyleSheet.create({


    inputText: {
        borderColor: '#cccccc',
        borderWidth: 1,
        flex: 1,
        //marginLeft: '10%'

    },



});

export default TextBox;
