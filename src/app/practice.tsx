import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'

export default function Practice() {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://m5pze33r3mtcevv4qwgz7624ku0nkdqh.lambda-url.ap-south-1.on.aws/")
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <View style={{ padding: 20 }}><ActivityIndicator size="large" /><Text>Loading from DynamoDB...</Text></View>
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Practice - Live from DynamoDB!</Text>
      <Text style={{ marginBottom: 15 }}>Now accessible! 500+ questions from AWS!</Text>

      {questions.map((item: any) => (
        <View key={item.id} style={{ backgroundColor: '#f0f0f0', padding: 15, marginBottom: 10, borderRadius: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#2563eb' }}>{item.topic} - {item.id}</Text>
          <Text style={{ marginTop: 5, fontWeight: '600' }}>{item.q || item.question}</Text>
          <Text style={{ marginTop: 5, color: 'gray' }}>{item.a || item.answer}</Text>
        </View>
      ))}
    </ScrollView>
  )
}