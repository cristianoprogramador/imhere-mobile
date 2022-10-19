import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from './styles'

export function Home() {
  
  function handleParticipantAdd(){
    console.log("Você clicou no botão de Adicionar!")
  }

  return (
    <View style={styles.container} >
      <Text style={styles.eventName}>
        Introdução ao React.Native
      </Text>
      <Text style={styles.eventDate}>
        Bem vindo ao curso
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
        +
        </Text>
      </TouchableOpacity>
    </View>
  )
}