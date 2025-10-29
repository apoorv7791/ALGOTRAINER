import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearningModules from '../(Drawer)/Learning-modules';
import Arrays from '../components/DataStructures/Arrays';
import LinkedList from '../components/DataStructures/LinkedList';
import Stacks from '../components/DataStructures/Stacks';
import Trees from '../components/DataStructures/Trees';
import Graphs from '../components/DataStructures/Graphs';
import Queues from '../components/DataStructures/Queues';
import Sorting from '../components/Algorithms/Sorting';
import Searching from '../components/Algorithms/Searching';
import Greedy from '../components/Algorithms/Greedy';
import Backtracking from '../components/Algorithms/Backtracking';
import GraphAlgorihtms from '../components/Algorithms/GraphAlgorihtms';
import DynamicProgramming from '../components/Algorithms/Dynamic-Programming';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LearningModules">
                {/* Main Screen */}
                <Stack.Screen
                    name="LearningModules"
                    component={LearningModules}
                    options={{ title: 'Learning Modules' }}
                />
                {/* Data Structures */}
                <Stack.Screen name="Arrays" component={Arrays} />
                <Stack.Screen name="Linked List" component={LinkedList} />
                <Stack.Screen name="Stacks" component={Stacks} />
                <Stack.Screen name="Queues" component={Queues} />
                <Stack.Screen name="Trees" component={Trees} />
                <Stack.Screen name="Graphs" component={Graphs} />

                {/* Algorithms */}
                <Stack.Screen name="Sroting" component={Sorting} />
                <Stack.Screen name="Searching" component={Searching} />
                <Stack.Screen name="Greedy" component={Greedy} />
                <Stack.Screen name="Backtracking" component={Backtracking} />
                <Stack.Screen name="Graph Algorithms" component={GraphAlgorihtms} />
                <Stack.Screen name="Dynamic Programming" component={DynamicProgramming} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default AppNavigator;
