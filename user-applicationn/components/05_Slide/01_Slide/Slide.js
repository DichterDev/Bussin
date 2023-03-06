import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Slide extends Component {
constructor(props) {

    super(props);
    this.state = {
        categes: [
        { cat_id: '1', cat_name: props.PointOne, backgroundcolor: '#EBEBEB', function: props.FunctionOne},
        { cat_id: '2', cat_name: props.PointTwo, backgroundcolor: '#CCCCCC', function: props.FunctionTwo},
        { cat_id: '3', cat_name: props.PointThree, backgroundcolor: '#CCCCCC', function: props.FunctionThree},
        { cat_id: '4', cat_name: props.PointFour, backgroundcolor: '#CCCCCC', function: props.FunctionFour},
        ],
        change: false,
    };
    }

    changeBackground = (item, key) => {
        let categes = JSON.parse(JSON.stringify(this.state.categes));
    
        for (let x = 0; x < this.state.categes.length; x++) {
          if (this.state.categes[x].cat_id == item.cat_id) {
            categes[x].backgroundcolor = '#EBEBEB';
            
            this.setState({
              categes: categes,
            });
          } else {
            categes[x].backgroundcolor = '#CCCCCC';
    
            this.setState({
              categes: categes,
            });
          }
        }
      };
  render() {
    return (
        <View className="flex p-2">
            <View className="flex-row bg-secondary-color rounded-lg w-max justify-between">
              {this.state.categes.map((item) => (
                  <TouchableOpacity key={item.cat_id} style={{backgroundColor: item.backgroundcolor,}} onPress={() => {this.changeBackground(item); item.function;}} className="bg-font-color p-2 m-1 rounded-lg">
                      <Text>{item.cat_name}</Text>
                  </TouchableOpacity>
              ))}
            </View>
        </View>
    )
  }
}