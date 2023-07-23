import { StatusBar } from 'expo-status-bar';
import 'fast-text-encoding';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screens/SharedScreens/SplashScreen";
import LoginScreen from "./Screens/SharedScreens/LoginScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./constants/colors";
import SignupScreen from './Screens/DoctorScreens/SignupScreen';

import DoctorProfile from './Screens/DoctorScreens/DoctorProfile';
import ScheduledAppointments from './Screens/DoctorScreens/ScheduledAppointments';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const DoctorDashboard = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.darkpurple },
        tabBarActiveTintColor: colors.purple,
      }}
    >
      <Tab.Screen
        name="ScheduledAppointments"
        component={ScheduledAppointments}
        options={{
          title: "ScheduledAppointments",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="calendar-plus-o"
              size={24}
              color={focused ? colors.purple : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        initialParams={route}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? colors.purple : colors.offWhite}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    
    <View style={styles.container}>  
      <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
             // headerTitle: () => <LogoTitle />,
             // headerStyle: { backgroundColor: colors.darkTeal },
              headerTintColor: colors.blue,
            }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{
                title: "Register Yourself",
              }}
            />
            <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />

          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    opacity: 0.1,
  },
 
});
