import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface NameProps {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: NameProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}