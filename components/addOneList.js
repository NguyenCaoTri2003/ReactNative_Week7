import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome6';

const API_URL = 'https://67186d3ab910c6a6e02c0e5c.mockapi.io/api/todo/task';

export default function AddOneList({navigation, route}) {
  const { userName } = route.params;

  const [todo, setTodo] = useState('');
  const [error, setError] = useState(''); // State cho thông báo lỗi

  const handleAdd = async () => {
    if (todo.trim()) {
      setError(''); // Xóa thông báo lỗi khi nhập đúng
      try {
        // Gửi yêu cầu POST đến MockAPI để thêm công việc
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: todo }),
        });

        if (response.ok) {
          Alert.alert('Thông báo', 'Công việc đã được thêm thành công!');
          navigation.goBack(); // Quay trở lại màn hình 2
        } else {
          Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm công việc.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Lỗi', 'Không thể kết nối với server.');
      }
    } else {
      setError('Vui lòng nhập một công việc!'); // Cập nhật thông báo lỗi nếu không có dữ liệu nhập vào
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.myInfo}>
          <TouchableOpacity onPress={() => navigation.navigate('Screen2', {userName})}>
            <Icons name='arrow-left' color='black' size={20} />
          </TouchableOpacity>
          <View style={styles.info}>
            <Image source={require('../assets/avt.jpg')} style={styles.imgInfo}/> 
            <View style={styles.textView}>
              <Text style={styles.textName}>Hi {userName}</Text>
              <Text style={styles.textIntro}>Have a great day ahead</Text>  
            </View>   
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.textContent}>ADD YOUR JOB</Text>
        <View style={styles.input}>
          <Icons name='rectangle-list' color='#1DD75B' size={20} style={styles.iconList} />
          <TextInput 
            placeholder='Input your job' 
            placeholderTextColor="#171A1F"  
            style={styles.inputList}
            value={todo}
            onChangeText={setTodo} // Thêm sự kiện thay đổi văn bản
          />
        </View>

        {/* Hiển thị thông báo lỗi dưới ô nhập */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.btnSubmit} onPress={handleAdd}>
          <Text style={styles.textBtnSubmit}>FINISH</Text>
          <Icons name='arrow-right' color='#fff' size={16} />
        </TouchableOpacity>
      </View>  
      <View style={styles.footer}>
        <Image source={require('../assets/imgMain.png')} style={styles.imgMain} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  header: {
    flex: 1,
    marginTop: 30
  },
  imgInfo: {
    height: 40,
    width: 40,
    borderRadius: 90
  },
  myInfo: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between'
  },
  textName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#171A1F',
    marginLeft: 10
  },
  textIntro: {
    fontSize: 12,
    fontWeight: '400',
    color: '#171A1F'
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContent: {
    fontSize: 25,
    fontWeight: '700'
  },
  input: {
    width: '100%',
    height: 34,
    borderWidth: 1,
    borderColor: '#9095A0',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  inputList: {
    width: '100%',
    height: 34,
    marginLeft: 10,
    alignItems: 'center'
  },
  iconList: {
    marginLeft: 10
  },
  btnSubmit: {
    width: 190,
    height: 44,
    backgroundColor: '#00BDD6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  textBtnSubmit: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
  errorText: { // Thêm style cho thông báo lỗi
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },
  footer: {
    flex: 1,
    alignItems: 'center'
  },
  imgMain: {
    width: 120,
    height: 120
  },
});
