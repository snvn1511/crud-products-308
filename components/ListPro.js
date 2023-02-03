import { View,Text, Button } from "react-native";
import st from "./MyStyle";

const ListPro = (  props )=>{
    const chuyenTrang = ()=>{
        props.navigation.navigate('AddPro');
    }

    return (
        <View  style={st.khungDSSP}>
            <Button title="Thêm SP" onPress={  chuyenTrang  } />

            <Text> Danh sách SP </Text>
        </View> 
    );

}

export default ListPro;