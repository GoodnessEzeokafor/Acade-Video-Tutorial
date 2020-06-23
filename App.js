import React, {useState} from 'react';
import { 
      StyleSheet, 
      Text, 
      View, 
      Button, 
      TextInput, 
      ScrollView,
    FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput"
export default function App() {
  const [outputText, setOutputText] = useState(0)

  const [courseGoal, setCourseGoal] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal)
    // setCourseGoal([...courseGoal,enteredGoal])
    setCourseGoal(currentGoals => [...currentGoals,{key:Math.round().toString(), value:goalTitle}])
    setIsAddMode(false)
  
  }
  const removeGoalHandler = goalId=>{
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionalHandler = ()=>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput 
        isAddMode={isAddMode}
        onAddGoal = {addGoalHandler} 
        onCancel={cancelGoalAdditionalHandler}
        />
      

    <View>
  {/* <Text>{enteredGoal}</Text> */}
  
    <FlatList 
        keyExtractor={(item,index)=> index  }        
        data={courseGoal} 
        renderItem={itemData => (

        <GoalItem 
        id={itemData.item.key}
        onDelete = {removeGoalHandler}
        title={itemData.item.value} />
    )}>
  {/* {courseGoal.map((goal, key) => 
        <View key={key} style={styles.listText}>
        <Text >
            {goal}
        </Text>
        </View>
        )} */}
    </FlatList>
    </View>


      {/* <View>...</View>
      
      <View>...</View> */}
      
    </View>


  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
    
  },
  inputStyles:{
    padding:10,
    width: 200
  },
  listText:{
    padding:10,
    marginVertical:10,
    backgroundColor:"#ccc",
    borderWidth:1
  }
});


// rm -rf .expo