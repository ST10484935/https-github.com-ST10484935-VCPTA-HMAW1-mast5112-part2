import { StatusBar } from 'expo-status-bar'; 

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native"; 

 

// Food items data 

const foodItems = [ 

  { 

    name: "Tangy Chicken Strips", 

    desc: "Tangy chicken strips served with Caesar salad and a drizzle of spicy dressing.", 

    cost: "R110.99", 

    img: "chicken.jpg", 

  }, 

  { 

    name: "Pizza Margherita", 

    desc: "Thin crust pizza mixed with basil and margherita sauce.", 

    cost: "R120.99", 

    img: "mast2pictures/pizza.jpg", 

  }, 

  { 

    name: "Beef Buffet", 

    desc: "Prime beef cuts cooked over the grill and topped off with basil.", 

    cost: "R89.65", 

    img: "mast2pictures\beef.jpg", 

  }, 

  { 

    name: "Burger Ender", 

    desc: "Lettuce-filled burger with cheese, tomato, and special sauce.", 

    cost: "R98.99", 

    img: "burger.jpg" 

  }, 

]; 

 

export default function App() { 

  // Static greeting message 

  const greetingMessage = "Hello, Customer Welcome to the Quick Serve App"; 

 

  return ( 

    <View style={styles.container}> 

      {/* Top Image */} 

      <Image 

        source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80' }} 

        style={styles.topImage} 

      /> 

 

      {/* Greeting Message */} 

      <Text style={styles.greetingText}>{greetingMessage}</Text> 

 

      {/* Toggle Buttons */} 

      <View style={styles.buttonContainer}> 

        <TouchableOpacity style={styles.button}> 

          <Text style={styles.buttonText}>Food</Text> 

        </TouchableOpacity> 

        <TouchableOpacity style={[styles.button, styles.buttonActive]}> 

          <Text style={styles.buttonText}>Drinks</Text> 

        </TouchableOpacity> 

      </View> 

 

      {/* Section Title */} 

      <View style={styles.sectionTitle}> 

        <Text style={styles.sectionTitleText}>Most popular meals</Text> 

      </View> 

 

      {/* Food Grid */} 

      <ScrollView style={styles.foodGrid} contentContainerStyle={styles.foodGridContainer}> 

        {foodItems.map((item, i) => ( 

          <View key={i} style={styles.foodItem}> 

            <Image source={{ uri: item.img }} style={styles.foodImage} /> 

            <Text style={styles.foodName}>{item.name}</Text> 

            <Text style={styles.foodDesc}>{item.desc}</Text> 

            <Text style={styles.foodCost}>Cost: {item.cost}</Text> 

          </View> 

        ))} 

      </ScrollView> 

    </View> 

  ); 

} 

 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    backgroundColor: '#fff6eb', 

    alignItems: 'center', 

    borderRadius: 20, 

    borderWidth: 12, 

    borderColor: '#0c0836', 

    maxWidth: 380, 

    marginHorizontal: 'auto', 

    padding: 20, 

    shadowColor: '#000', 

    shadowOffset: { width: 0, height: 3 }, 

    shadowOpacity: 0.1, 

    shadowRadius: 5, 

  }, 

  topImage: { 

    width: '100%', 

    height: 160, 

    borderRadius: 20, 

    marginBottom: 20, 

  }, 

  greetingText: { 

    fontSize: 20, 

    fontWeight: 'bold', 

    color: '#0c0836', 

    marginBottom: 20, 

  }, 

  buttonContainer: { 

    flexDirection: 'row', 

    gap: 10, 

    marginBottom: 20, 

  }, 

  button: { 

    paddingHorizontal: 20, 

    paddingVertical: 10, 

    borderRadius: 20, 

    backgroundColor: '#ff7b3b', 

  }, 

  buttonActive: { 

    backgroundColor: '#0c0836', 

  }, 

  buttonText: { 

    fontSize: 16, 

    fontWeight: '600', 

    color: '#fff6eb', 

  }, 

  sectionTitle: { 

    backgroundColor: '#0c0836', 

    paddingVertical: 10, 

    paddingHorizontal: 20, 

    borderRadius: 30, 

    marginBottom: 20, 

  }, 

  sectionTitleText: { 

    color: '#fff6eb', 

    fontSize: 14, 

    fontWeight: '600', 

    textAlign: 'center', 

  }, 

  foodGrid: { 

    width: '100%', 

  }, 

  foodGridContainer: { 

    flexDirection: 'row', 

    flexWrap: 'wrap', 

    gap: 20, 

    justifyContent: 'center', 

  }, 

  foodItem: { 

    backgroundColor: '#ff7b3b', 

    borderRadius: 20, 

    padding: 10, 

    width: 150, 

    alignItems: 'center', 

  }, 

  foodImage: { 

    width: '100%', 

    height: 80, 

    borderRadius: 15, 

    marginBottom: 10, 

  }, 

  foodName: { 

    color: '#fff', 

    fontSize: 14, 

    fontWeight: '600', 

  }, 

  foodDesc: { 

    color: '#fff6eb', 

    fontSize: 12, 

    textAlign: 'center', 

  }, 

  foodCost: { 

    color: '#0c0836', 

    fontSize: 14, 

    fontWeight: '600', 

    marginTop: 5, 

  }, 

}); 

 