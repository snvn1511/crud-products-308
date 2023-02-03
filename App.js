import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPro from './components/ListPro';
import AddPro from './components/AddPro';


// tạo stack để quản lý màn hình
const stackMain = createNativeStackNavigator();

const App = () => {

  return (
    // Bước 3: Định nghĩa Navigation
    //Tình huống 1: App chính chỉ có Nav
    <NavigationContainer>
      <stackMain.Navigator initialRouteName='ListPro'>
        <stackMain.Screen name='ListPro' component={ListPro} options={{ title: 'Danh sách SP' }} />
        <stackMain.Screen name='AddPro' component={AddPro} options={{ title: 'Thêm SP' }} />
        {/* viết tiếp các màn hình khác vào đây */}
      </stackMain.Navigator>
    </NavigationContainer>
  )
}
export default App;




