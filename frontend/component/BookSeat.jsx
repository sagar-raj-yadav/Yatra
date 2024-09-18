import { StyleSheet, Text,Image, View, FlatList, TouchableOpacity } from 'react-native'
import {useState} from 'react'



const Booking = () => {

  const [PopUpVisble,setPopUpVisble]=useState(false);


  // State for the first row
  const [row1, setRow1] = useState([
    { empty: false, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  // State for the second row
  const [row2, setRow2] = useState([
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  // State for the third row
  const [row3, setRow3] = useState([
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
  ]);


  const onSelectRow1=(index)=>{
    let tempRow=[];
    tempRow=row1;
    tempRow.map((item,ind)=>{
        if(index===ind){
          if(item.selected===true){
            item.selected=false;
            item.empty=true;
          }else{
            item.selected=true;
            item.empty=false;
          }
      }
    });
    
    let tempSeats=[];
    tempRow.map(item=>{
      tempSeats.push(item);
    });
    setRow1(tempSeats);
  };

  const onSelectRow2=(index)=>{
    let tempRow=[];
    tempRow=row2;
    tempRow.map((item,ind)=>{
        if(index===ind){
          if(item.selected===true){
            item.selected=false;
            item.empty=true;
          }else{
            item.selected=true;
            item.empty=false;
          }
        }
    });
    
    let tempSeats=[];
    tempRow.map(item=>{
      tempSeats.push(item);
    });
    setRow2(tempSeats);
  };


  const onSelectRow3=(index)=>{
    let tempRow=[];
    tempRow=row3;
    tempRow.map((item,ind)=>{
        if(index===ind){
          if(item.selected===true){
            item.selected=false;
            item.empty=true;
          }else{
            item.selected=true;
            item.empty=false;
          }
      }
    });
    
    let tempSeats=[];
    tempRow.map(item=>{
      tempSeats.push(item);
    });
    setRow3(tempSeats);
  };

  const selectedSeats=[];

  const getAllSeats=()=>{
    row1.map(item=>{
      if(item.selected===true){
        selectedSeats.push(1);
      }
    });

    row2.map(item=>{
      if(item.selected===true){
        selectedSeats.push(1);
      }
    });

    row3.map(item=>{
      if(item.selected===true){
        selectedSeats.push(1);
      }
    });

    return selectedSeats.length;
  }


  return (
    <>
    <View style={{flex:1,alignItems:"center",marginTop:25}}>
    <View style={{width:"70%",height:"80%",borderWidth:1,borderRadius:5,borderColor:"black"}}>
      <Image source={require('../assets/stearing.png')} 
      style={{width:34,height:34,alignSelf:'flex-end',margin:10}}/>

{/* start 3  */}
  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:5}}>

    {/*column side 1*/} 
    <View>
     <FlatList data={row1}
       numColumns={2} 
      renderItem={({item,index})=>{
      return(
        <TouchableOpacity style={{margin:8}} 
        onPress={()=>{
          if(item.empty==false && item.selected==false ){
            alert("seat already selected");
          }else{
          onSelectRow1(index);
          }}
          }>

        {
          item.empty===true && item.selected===false ?(<Image source={require('../assets/seatwhite.png')} style={{width:30,height:30}}/>)
          :item.empty===false && item.selected===true?((<Image source={require('../assets/seatblack.png')} style={{width:30,height:30,tintColor:"green"}}/>)) 
          :item.empty===false && item.selected===false ?((<Image source={require('../assets/seatblack.png')} style={{width:30,height:30,tintColor:"#8e8e8e"}}/>))
          :null
        }
       </TouchableOpacity>
      )
     }}
     />
  </View>
  {/*column side 1*/}


  {/* start column side 2*/}
  <View>
  <FlatList data={row2}
       numColumns={2} 
      renderItem={({item,index})=>{
      return(
        <TouchableOpacity style={{margin:8}} 
        onPress={()=>{
          if(item.empty==false && item.selected==false ){
            alert("seat already selected");
          }else{
          onSelectRow2(index);
          }}
          }>
        {
          item.empty===true && item.selected===false ?(<Image source={require('../assets/seatwhite.png')} style={{width:30,height:30}}/>)
          :item.empty===false && item.selected===true?((<Image source={require('../assets/seatblack.png')} style={{width:30,height:30,tintColor:"green"}}/>)) 
          :item.empty===false && item.selected===false ?((<Image source={require('../assets/seatblack.png')} style={{width:30,height:30,tintColor:"#8e8e8e"}}/>))
          :null
        }
       </TouchableOpacity>
      )
     }}
     />
  </View>
  {/*end column side 2*/}


</View>
{/* end 3 */}


{/* start column side 3*/}
<View  style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
<FlatList data={row3}
      horizontal
      renderItem={({item,index})=>{
      return(
        <TouchableOpacity style={{marginTop:2,marginHorizontal:7}}
        onPress={()=>{
          if(item.empty==false && item.selected==false ){
            alert("seat already selected");
          }else{
          onSelectRow3(index);
          }}
          }>
        {
          item.empty===true && item.selected===false ?(<Image source={require('../assets/seatwhite.png')} style={{width:30,height:30}}/>)
          :item.empty===false && item.selected===true?((<Image source={require('../assets/seatblack.png')} style={{width:30,height:30,tintColor:"green"}}/>)) 
          :item.empty===false && item.selected===false ?((<Image source={require('../assets/seatblack.png')} style={{width:30,height:30,tintColor:"#8e8e8e"}}/>))
          :null
        }
       </TouchableOpacity>
      )
     }}
     />
</View>
  {/*end column side 3*/}


<View style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center",gap:30,marginTop:14}}>

  <View style={{display:"flex",flexDirection:"row"}}><Image source={require('../assets/seatwhite.png')} style={{width:25,height:25}}/>
  <Text style={{marginTop:5}}>Empty</Text>
  </View>

  <View style={{display:"flex",flexDirection:"row"}}><Image source={require('../assets/seatblack.png')} style={{width:25,height:25,tintColor:"#8e8e8e"}}/>
  <Text style={{marginTop:5}}>Reserved</Text>
  </View>

  <View style={{display:"flex",flexDirection:"row"}}><Image source={require('../assets/seatblack.png')} style={{width:25,height:25,tintColor:"green"}}/>
  <Text style={{marginTop:5}}>selected</Text>
  </View>

</View>
 



      </View>
      
      <View style={{position:"absolute",height:60,width:'100%',bottom:18,flexDirection:'row',justifyContent:"space-evenly"}}>
      <View>
      <Text style={{color:"black",marginLeft:20,fontWeight:"bold",top:2,fontSize:18}}>  {`selected seats (${getAllSeats()}) `}    </Text>
      <TouchableOpacity style={{marginLeft:50}}><Text style={{color:"#32aeef"}} onPress={()=>setPopUpVisble(true)}>  View Details &gt;&gt;</Text></TouchableOpacity>
      </View>

      
      
     <TouchableOpacity 
     activeOpacity={0.8}
     style={{width:"40%",backgroundColor:"green",height:42,justifyContent:"center",alignItems:"center", borderRadius: 10}}>
     <Text style={{color:"#fff",fontWeight:"bold",fontSize:18}}>Book Now</Text>
     </TouchableOpacity>

      </View>

    </View>

    {PopUpVisble && (
      <View style={styles.overlay}>
      <View style={styles.popup}>
      <TouchableOpacity onPress={()=>setPopUpVisble(false)}>
              <Image source={require("../assets/cancel.png")} style={styles.closeButton} />
            </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Booking Details</Text>
          <Text style={styles.detail}>Name: Sagar Raj</Text>
          <Text style={styles.detail}>Phone: 123456789</Text>
          <Text style={styles.detail}>Total Seats: { selectedSeats.length}</Text>
          <Text style={styles.detail}>Seats Number: s2, s3, s4, s5, s6</Text>
          <Text style={styles.detail}>Seat Type: AC</Text>
          <Text style={styles.detail}>Total Price: ₹{230*selectedSeats.length}</Text>
        </View>
      </View>
    </View>
      )
    }



    </>
    

  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker semi-transparent background
  },
  popup: {
    width: 320,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15, // More rounded corners
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // Shadow for Android
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    left: 100,
    height:30,
    width:30,
    padding: 10,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
});

export default Booking;
