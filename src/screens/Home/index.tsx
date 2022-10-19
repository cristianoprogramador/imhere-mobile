import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { useState } from "react";

import { Participant } from "../../components/Participant";

import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }

    setParticipants([...participants, participantName])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])

    console.log(`Remover participante ${name}`)
  }

  return (
    <View style={styles.container} >
      <Text style={styles.eventName}>
        Introdução ao React.Native
      </Text>

      <Text style={styles.eventDate}>
        Bem vindo ao curso
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText} >
            Ninguem chegou no evento ainda?
            Adicione participantes a sua lista.
          </Text>
        )}
      />

    </View>
  )
}