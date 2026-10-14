import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function ResumeScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [programming, setProgramming] = useState('');
  const [technical, setTechnical] = useState('');
  const [tools, setTools] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [savedMsg, setSavedMsg] = useState('');

  useEffect(() => {
    try {
      const s = localStorage.getItem('myResume');
      if (s) {
        const r = JSON.parse(s);
        setFullName(r.fullName||''); setEmail(r.email||''); setPhone(r.phone||''); setLocation(r.location||'');
        setCollege(r.college||''); setDegree(r.degree||''); setBranch(r.branch||''); setYear(r.year||''); setCgpa(r.cgpa||'');
        setProgramming(r.programming||''); setTechnical(r.technical||''); setTools(r.tools||'');
        setProjectTitle(r.projectTitle||''); setProjectDesc(r.projectDesc||'');
        setSavedMsg('✅ Loaded: ' + r.fullName);
      }
    } catch {}
  }, []);

  const save = async () => {
    if (!fullName) { alert('Enter Full Name'); return; }
    const data = { fullName, email, phone, location, college, degree, branch, year, cgpa, programming, technical, tools, projectTitle, projectDesc };
    
    // 1. Save locally first
    localStorage.setItem('myResume', JSON.stringify(data));
    
    // 2. Save to AWS Lambda (your saveResume Lambda)
    try {
      setSavedMsg('⏳ Saving to Cloud...');
      const res = await fetch('https://5x3man6atzisll2kmoj5aehh640khjnl.lambda-url.ap-south-1.on.aws/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      console.log('Lambda saved:', result);
      setSavedMsg('✅ Resume Saved for ' + fullName + '! Cloud + Local Saved! Go to Home - 85% ready');
      alert('Resume Saved for ' + fullName + '! Saved to Cloud!');
    } catch (e) {
      console.log('Cloud save failed:', e);
      setSavedMsg('✅ Resume Saved for ' + fullName + '! (Local only)');
      alert('Saved Locally! Cloud error, but its okay.');
    }
  };

  const clear = () => {
    localStorage.removeItem('myResume');
    setFullName(''); setEmail(''); setPhone(''); setLocation(''); setCollege(''); setDegree(''); setBranch(''); setYear(''); setCgpa(''); setProgramming(''); setTechnical(''); setTools(''); setProjectTitle(''); setProjectDesc('');
    setSavedMsg(''); alert('Cleared');
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 150}}>
        {savedMsg ? <View style={styles.banner}><Text style={styles.bannerText}>{savedMsg}</Text></View> : null}
        <Text style={styles.title}>Resume Builder</Text>
        <Text style={styles.subtitle}>Create your professional resume for placements</Text>

        <Text style={styles.section}>Personal Information</Text>
        <TextInput style={styles.input} placeholder="Full Name *" value={fullName} onChangeText={setFullName} />
        <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} />
        <TextInput style={styles.input} placeholder="Location (ex: Vellore, TN)" value={location} onChangeText={setLocation} />

        <Text style={styles.section}>Education</Text>
        <TextInput style={styles.input} placeholder="College / University (ex: VIT)" value={college} onChangeText={setCollege} />
        <TextInput style={styles.input} placeholder="Degree (ex: B.Tech)" value={degree} onChangeText={setDegree} />
        <TextInput style={styles.input} placeholder="Branch (ex: CSE)" value={branch} onChangeText={setBranch} />
        <TextInput style={styles.input} placeholder="Graduation Year (ex: 2026)" value={year} onChangeText={setYear} />
        <TextInput style={styles.input} placeholder="CGPA (ex: 8.5)" value={cgpa} onChangeText={setCgpa} />

        <Text style={styles.section}>Skills</Text>
        <TextInput style={styles.input} placeholder="Programming Languages (ex: Python, Java, C++)" value={programming} onChangeText={setProgramming} />
        <TextInput style={styles.input} placeholder="Technical Skills (ex: AWS, ML, Web Dev)" value={technical} onChangeText={setTechnical} />
        <TextInput style={styles.input} placeholder="Tools & Technologies (ex: VS Code, Git, Docker)" value={tools} onChangeText={setTools} />

        <Text style={styles.section}>Projects</Text>
        <TextInput style={styles.input} placeholder="Project Title (ex: PlacementTwin App)" value={projectTitle} onChangeText={setProjectTitle} />
        <TextInput style={[styles.input, {height: 110}]} placeholder="Describe your project..." multiline value={projectDesc} onChangeText={setProjectDesc} />

        <TouchableOpacity onPress={clear}><Text style={styles.clear}>Clear All</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>Create Resume</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{flex:1, backgroundColor:'#F7F8FC'},
  container:{flex:1, padding:20},
  banner:{backgroundColor:'#DCFCE7', padding:12, borderRadius:10, marginTop:20, marginBottom:10},
  bannerText:{color:'#166534', fontWeight:'700'},
  title:{fontSize:28, fontWeight:'800', color:'#171A2B', marginTop:10},
  subtitle:{fontSize:14, color:'#777', marginBottom:16},
  section:{fontSize:18, fontWeight:'700', marginTop:14, marginBottom:10, color:'#171A2B'},
  input:{backgroundColor:'#FFF', borderRadius:12, padding:15, marginBottom:12, borderWidth:1, borderColor:'#EEE'},
  footer:{position:'absolute', bottom:0, left:0, right:0, backgroundColor:'#FFF', padding:16, borderTopWidth:1, borderTopColor:'#EEE'},
  button:{backgroundColor:'#2563EB', borderRadius:14, padding:16, alignItems:'center'},
  buttonText:{color:'#FFF', fontWeight:'800', fontSize:16},
  clear:{color:'#EF4444', textAlign:'center', marginTop:10, fontWeight:'600'},
});