import React, {useState} from 'react';
import { 
    View,
    Button,
    TextInput, 
StyleSheet,
Modal,
Slider
} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const  goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)    
      }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
    }
    
        return(
        <Modal visible={props.isAddMode} animationType="fade">
        <View style={styles.innerScreen}>
            <TextInput 
            style={styles.inputStyles} 
            placeholder="ADD..." 
            onChangeText = {goalInputHandler}
            value = {enteredGoal}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.btn1}> 
                    <Button 
                    title="CANCEL"
                    color="red"
                    onPress = {props.onCancel}  
                    />
                </View>
                <View style={styles.btn1}> 
                    <Button 
                    title="ADD"
                    onPress = {addGoalHandler}  
                    />                
                </View>

        </View>
        </View>
        </Modal>
        );     
}



const styles = StyleSheet.create({  
    innerScreen:{
            // flexDirection:'row', 
            flex:1,
            justifyContent:"center",
             alignItems:"center"
            },
    inputStyles:{
      padding:10,
      width: "80%",
      borderColor:"black",
      borderWidth:1,
      marginBottom:10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:"60%"
    },
    btn1:{
        width:"40%"
    },
    btn2:{}
  });
export default GoalInput