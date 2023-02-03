import React from "react";
import { View,Text, Button } from "react-native";
import {useState} from "react"
import st from "./MyStyle";
import { FlatList } from "react-native-gesture-handler";

const ListPro = (  props )=>{
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]); // chứa sản phẩm
    // xử lý hiển thị dữ liệu
    const getData = async () =>{
        let url_api = 'https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham';

        try {
            const response = await fetch(  url_api );  // lấy dữ liệu về
            const jsonSP = await response.json(); // chuyển dữ liệu thành đối tượng json
            setdssp (jsonSP);
            console.log(jsonSP);
          } catch (error) {
            console.error(error);
          } finally  {
            // kết thúc quá trình thực hiện trong try, dù xảy ra lỗi hay không cũng gọi vào đây
            // đổi trạng thái isLoading là false
            setisLoading(false);
        }
    }
 



    const chuyenTrang = ()=>{
        props.navigation.navigate('AddPro');
    }
    
    const renderSP  =({item})=>{
        console.log(item);
        return(

            <View>
                <Text>Tên sp: { item.name} - giá: {item.price}</Text>
            </View>
        );
            
    }


    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          // khi màn hình được hiển thị sẽ gọi vào hàm này
          // gọi hàm load dữ liệu
          getData();
        });
    
        return unsubscribe;
      }, [props.navigation]);



    return (
        <View  style={st.khungDSSP}>
            <Button title="Thêm SP" onPress={  chuyenTrang  } />

            <Text> Danh sách SP </Text>

            <FlatList
            data={dssp}
            keyExtractor={  (item) =>{ return item.id}  }
            renderItem = { renderSP }
            />

        </View> 
    );

}

export default ListPro;