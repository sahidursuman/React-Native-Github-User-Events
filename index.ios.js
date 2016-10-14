import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native'
import TestProject from './app/components'
import Greeting from './app/components'
import ViewContainer from './app/components'

AppRegistry.registerComponent('TestProject', () => Greeting);