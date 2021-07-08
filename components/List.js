import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colours } from './Colours';
import { Icon } from 'react-native-elements'


export function List(props) {

  const Renderer = ({item}) => (
    <View style={ (item.status === true) ? ListStyle.listItemDone : ListStyle.listItem}>
      <Text>{item.name}</Text>
      <View style={ListStyle.buttons}>
        <TouchableOpacity onPress={ () => props.doneHandler(item.id) }>
          <Icon name="check" color={ Colours.dark }/>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => props.deleteHandler(item.id) }>
          <Icon name="delete" color={ Colours.brown }/>
        </TouchableOpacity>
      </View>
    </View>
  )

  return(
    <View>
      <FlatList 
      data={ props.listItems } 
      renderItem={ Renderer} 
      keyExtractor={ item => item.id.toString() } 
    />
    </View>
  )
}

const ListStyle = StyleSheet.create( {
  listItem: {
    backgroundColor: Colours.light,
    marginVertical: 4,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemDone: {
    backgroundColor: '#55BCF6',
    marginVertical: 4,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
})