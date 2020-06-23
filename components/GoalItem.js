import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Touchable, 
    TouchableOpacity,
TouchableNativeFeedback} from 'react-native';

const GoalItem = (props) => {
    return(
        <TouchableOpacity 
        
        onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.listText}>
                    <Text >
                        {props.title}
                    </Text>
            </View>
       </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
   
    listText:{
      padding:10,
      marginVertical:10,
      backgroundColor:"#ccc",
      borderWidth:1
    }
  });
export default GoalItem