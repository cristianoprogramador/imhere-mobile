import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles'

export function Home() {
  const participants = ['Cristiano', 'Guilherme', 'Rodrigo', 'Maria', 'Lucas', 'Valeria', 'Marcela']

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }

  function handleParticipantRemove(name: string) {
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
            onRemove={() => handleParticipantRemove('Cristiano')}
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