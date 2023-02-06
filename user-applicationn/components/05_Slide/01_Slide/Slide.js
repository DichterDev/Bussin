import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Slide extends Component {
constructor(props) {

    super(props);
    this.state = {
        categes: [
        { key: 1, cat_id: '1', cat_name: props.PointOne, backgroundcolor: '#EBEBEB' },
        { key: 2, cat_id: '2', cat_name: props.PointTwo, backgroundcolor: '#CCCCCC' },
        { key: 3, cat_id: '3', cat_name: props.PointThree, backgroundcolor: '#CCCCCC' },
        { key: 4, cat_id: '4', cat_name: props.PointFour, backgroundcolor: '#CCCCCC' },
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
          key = this.state.categes[x].key;
        }
      };
  render() {
    return (
        <View className="flex-1 justify-center items-center">
            <View className="flex-row bg-secondary-color rounded-lg w-3/4 justify-between">
              {this.state.categes.map((item, key) => (
                  <TouchableOpacity style={{backgroundColor: item.backgroundcolor,}} onPress={() => this.changeBackground(item, key)} className="bg-font-color py-2 px-1 m-1 rounded-lg">
                      <Text>{item.cat_name}</Text>
                  </TouchableOpacity>
              ))}
            </View>
        </View>
    )
  }
}