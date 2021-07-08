import * as React  from 'react';
import { useRef, useState, useEffect } from 'react';
import {Icon} from 'react-native-elements'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Colours } from './Colours';

export function Header(props) {
  const inputRef = useRef()
  const [ name, setName ] = useState()

  useEffect( () => {
    // console.log(name)
  })

  const pressHandler = () => {
    inputRef.current.clear()
    props.addHandler( name )
  }

  const inputHandler = (text) => {
    setName( text )
  }
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.headerText}>{props.name}</Text>
      <View style={HeaderStyles.inputContainer}>
        <TextInput 
          onChangeText={inputHandler} 
          style={HeaderStyles.input} 
          clearButtonMode="always" 
          ref={inputRef}
        />
        <TouchableOpacity style={HeaderStyles.inputButton} onPress={pressHandler}>
          <Icon name="add" color={Colours.light} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: Colours.primary,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  headerText: {
    color: Colours.light,
    paddingVertical: 3,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colours.light,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontSize: 16,
    flex: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  inputButton: {
    width: 50,
    backgroundColor: Colours.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  inputButtonText: {
    color: Colours.light,
  },
});
