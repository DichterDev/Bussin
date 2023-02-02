import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Slide extends Component {
constructor(props) {

    super(props);
    this.state = {
        categes: [
        { cat_id: '1', cat_name: {this: props.PointOne}, backgroundcolor: '#ED2525' },
        { cat_id: '2', cat_name: {this: props.PointTwo}, backgroundcolor: '#ED2525' },
        { cat_id: '3', cat_name: {this: props.PointThree}, backgroundcolor: '#ED2525' },
        { cat_id: '4', cat_name: {this: props.PointFour}, backgroundcolor: '#ED2525' },
        ],
        change: false,
    };
    }

    changeBackground = item => {
        let categes = JSON.parse(JSON.stringify(this.state.categes));
    
        for (let x = 0; x < this.state.categes.length; x++) {
          if (this.state.categes[x].cat_id == item.cat_id) {
            categes[x].backgroundcolor = '#0000FF';
    
            this.setState({
              categes: categes,
            });
          } else {
            categes[x].backgroundcolor = '#ED2525';
    
            this.setState({
              categes: categes,
            });
          }
        }
      };
  render() {
    return (
        <View className="flex-1 justify-center items-center">
            <View className="flex-row bg-secondary-color rounded-lg">
            {this.state.categes.map((item, key) => (
                <TouchableOpacity style={{backgroundColor: item.backgroundcolor,}} onPress={() => this.changeBackground(item)} className="bg-font-color px-6 py-2 m-1 rounded-lg">
                    <Text>{item.cat_name}</Text>
                </TouchableOpacity>
            ))}
            {this.state.categes.map((item, key) => (
                <TouchableOpacity style={{backgroundColor: item.backgroundcolor,}} onPress={() => this.changeBackground(item)} className="px-6 py-2 m-1 rounded-lg">
                    <Text>{item.cat_name}</Text>
                </TouchableOpacity>
            ))}
            {this.state.categes.map((item, key) => (
                <TouchableOpacity style={{backgroundColor: item.backgroundcolor,}} onPress={() => this.changeBackground(item)} className="px-6 py-2 m-1 rounded-lg">
                    <Text>{item.cat_name}</Text>
                </TouchableOpacity>
            ))}
            {this.state.categes.map((item, key) => (
                <TouchableOpacity style={{backgroundColor: item.backgroundcolor,}} onPress={() => this.changeBackground(item)} className="px-6 py-2 m-1 rounded-lg">
                    <Text>{item.cat_name}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
    )
  }
}