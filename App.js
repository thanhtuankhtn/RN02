import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Buoi3 from './src/component/buoi3/index';
import Buoi4 from './src/component/buoi4/index';
//import Buoi5 from './src/component/buoi5/Touched';
//import Buoi5 from './src/component/buoi5/RendenWithState';
import Buoi5 from './src/component/buoi5/RenderIcon';

// class App extends React.Component {
//   render() {
//     return (
//       // <View style = {{flex: 1, justifyContent : 'center' }}> 
//       //     <Text>Hello World</Text>
//       // </View>
//       <view style = {{flex:1}}></view>
//     )
//   }
// }

//Demo1

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style = {[styles.box, styles.colorBox1]}>
//         <Text>Purple: #C9C9FF</Text>
//       </View>
//       <View style = {[styles.box, styles.colorBox2]}>
//         <Text>Blue: #3D85C6</Text>
//       </View>
//       <View style = {[styles.box, styles.colorBox3]}>
//         <Text>Green: #96CC96</Text>
//       </View>
//       <View style = {[styles.box, styles.colorBox4]}>
//         <Text>Yellow: #F4B940</Text>
//       </View>
//     </View>

//   )
// };

// const styles = StyleSheet.create({
// container:{
//   flex:1,
//   //paddingTop:50,
//   //paddingBottom:50,
//   paddingVertical:50,
//   //paddingLeft:20,
//   //paddingRight:20
//   paddingHorizontal:50
// },
// box:{
//   flex:1,
//   borderRadius:10,
//   marginBottom: 20,
// },
// colorBox1:{
//   backgroundColor: '#C9C9FF',
//   alignItems:'center',
//   justifyContent:'center' //Dua chu ra phuong thang dung (truc y)
// },
// colorBox2:{
//   backgroundColor: '#3D85C6',
//   alignItems:'center',
//   justifyContent:'center'
// },
// colorBox3:{
//   backgroundColor: '#96CC96',
//   alignItems:'center',
//   justifyContent:'center'
// },
// colorBox4:{
//   backgroundColor: '#F4B940',
//   alignItems:'center',
//   justifyContent:'center'
// }
// });

//Demo2
// const App = () => {
//   return (
//     <View style={styles.container} >
//       <View style={styles.box1}>
//         <View style={styles.box1Item1}></View>
//         <View style={styles.box1Item2}></View>
//       </View>
//       <View style={styles.box2}>
//         <View style={styles.box2Item}>
//             <View style={styles.box2Item3}></View>
//             <View style={styles.box2Item4}></View>
//         </View>  
//         <View style={styles.box2Item}>
//             <View style={styles.box2Item3}></View>
//             <View style={styles.box2Item4}></View>
//         </View>                          
//       </View>
      
//     </View>
//   )

// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   box1: {
//     flex:1,
//     backgroundColor: '#A1c99A',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     marginBottom: 20
//   },
//   box2: {
//     flex:1,
//     backgroundColor: '#c8c8fA',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   box1Item1:{
//     backgroundColor:'#ffffc2',
//     borderRadius:10,
//     flex:1,
//     margin: 20
//   },
//   box1Item2:{
//     backgroundColor:'#ffffc2',
//     borderRadius:10,
//     flex:1,
//     margin: 20
//   }, 
//   box2Item:{
//     flex:1,
//     flexDirection:'row',
//     margin:20,
//   },  
//   box2Item3:{
//     flex:1,
//     backgroundColor:'#4f82c0',
//     marginRight:20,
//     borderRadius:10
//   },
//   box2Item4:{ 
//     flex:1,
//     backgroundColor:'#4f82c0',
//     borderRadius:10
//   }
// });

const App = () => {
  //return <Buoi4></Buoi4>
  return <Buoi5></Buoi5>
};

// 


export default App;