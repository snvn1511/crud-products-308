import {useState} from 'react';
import { View,Text, Button,TextInput } from "react-native"; 
const AddPro = ()=>{

    const [proName, setproName] = useState('');
    const [price, setprice] = useState(0);
    const SaveProduct = ()=>{
            alert (proName);

        // 1. tạo obj 
        let objSP = { name: proName, price: price};
        //2. Dùng fetch:
        let api_url ="https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham"
        
        fetch(api_url , {
            method: 'POST', // POST: Thêm mới, PUT: Sửa, DELETE: xóa, GET: lấy thông tin
            headers: { // Định dạng dữ liệu gửi đi
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify( objSP  ) // chuyển đối tượng SP thành chuỗi JSON
        })
        .then ( (response )=>{
            console.log(response.status);
            // nếu log là 201 thì là tạo thành công
            if(response.status==201)
            alert("Thêm mới thành công");
        
        
        })
        .catch( (err)=>{  // catch để bắt lỗi ngoại lệ
            console.log(err);
        }) ;
 

    }

    return (
        <View>
            <Text>Thêm sản phẩm</Text>

            <TextInput placeholder="Tên sản phẩm" onChangeText={ (txt)=>{ setproName (txt)}} />
            <TextInput placeholder="Giá tiền" onChangeText={ (txt)=>{ setprice(txt)}} />
            <Button title="Save" onPress={SaveProduct}/>

        </View>
    );
}

export default AddPro;