import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const [readiness, setReadiness] = useState(65);
  const [name, setName] = useState('');

  useEffect(() => {
    try {
      const s = localStorage.getItem('myResume');
      if (s) {
        const r = JSON.parse(s);
        setName(r.fullName || 'Keren');
        setReadiness(85);
      }
    } catch {}
  }, []);

  return (
    <ScrollView style={st.c}>
      <Text style={st.wel}>Welcome back 👋 {name || ''}</Text>
      <Text style={st.title}>PlacementTwin</Text>
      <View style={st.card}>
        <Text style={st.cardT}>Placement Readiness</Text>
        <Text style={st.per}>{readiness}%</Text>
        <View style={st.barBg}><View style={[st.barF, {width: `${readiness}%`}]} /></View>
        <Text style={st.cardSub}>{readiness===85?`✅ Resume saved for ${name}!`:`You're making good progress`}</Text>
      </View>
      <Text style={st.quick}>Quick Actions</Text>

      <Link href="/resume" asChild><TouchableOpacity style={st.act}><Text style={st.ic}>📄</Text><Text style={st.at}>Resume {readiness===85?'✅':''}</Text><Text style={st.as}>Build your resume</Text></TouchableOpacity></Link>
      <Link href="/practice" asChild><TouchableOpacity style={st.act}><Text style={st.ic}>📝</Text><Text style={st.at}>Practice Questions</Text><Text style={st.as}>500+ placement Qns</Text></TouchableOpacity></Link>
      <Link href="/aptitude" asChild><TouchableOpacity style={st.act}><Text style={st.ic}>💻</Text><Text style={st.at}>Aptitude & Coding</Text><Text style={st.as}>DSA, Aptitude, Reasoning</Text></TouchableOpacity></Link>
      <Link href="/companies" asChild><TouchableOpacity style={st.act}><Text style={st.ic}>🎯</Text><Text style={st.at}>Companies</Text><Text style={st.as}>TCS, Infosys, Amazon</Text></TouchableOpacity></Link>
      <Link href="/progress" asChild><TouchableOpacity style={st.act}><Text style={st.ic}>📊</Text><Text style={st.at}>Progress</Text><Text style={st.as}>Track daily</Text></TouchableOpacity></Link>
      <View style={{height:120}}/>
    </ScrollView>
  );
}
const st = StyleSheet.create({
  c:{flex:1,backgroundColor:'#F7F8FC',padding:20},
  wel:{marginTop:20,color:'#666'},
  title:{fontSize:28,fontWeight:'800',marginTop:4},
  card:{backgroundColor:'#2563EB',borderRadius:20,padding:20,marginTop:16,marginBottom:20},
  cardT:{color:'#FFF',fontWeight:'600'},
  per:{color:'#FFF',fontSize:48,fontWeight:'900',marginVertical:6},
  barBg:{backgroundColor:'rgba(255,255,255,0.3)',height:8,borderRadius:10,overflow:'hidden'},
  barF:{backgroundColor:'#FFF',height:8},
  cardSub:{color:'#E0E7FF',marginTop:10},
  quick:{fontSize:18,fontWeight:'800',marginBottom:12},
  act:{backgroundColor:'#FFF',borderRadius:16,padding:16,marginBottom:12,borderWidth:1,borderColor:'#EEE'},
  ic:{fontSize:22},
  at:{fontWeight:'700',marginTop:6},
  as:{color:'#777',fontSize:12,marginTop:2},
});