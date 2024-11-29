import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Header({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e', 
    padding: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  headerText: {
    fontSize: 24,        
    fontWeight: 'bold',   
    color: '#ffffff',     
    textAlign: 'center',  
  },
});
