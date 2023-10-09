import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TopNavBar from '../../constants/TopNavbar';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <ScrollView>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => navigation.navigate('PowerBuilding')}>
            <Image 
              style={styles.gridItem} 
              source={{uri: 'your_image_url_here'}}
            />
          </TouchableOpacity>
          <View style={styles.gridItem}></View>
          <View style={styles.gridItem}></View>
          <View style={styles.gridItem}></View>
          {/* Add more grid items as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridItem: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: '#ccc'  // Replace this with an actual image
  }
});

export default HomeScreen;
