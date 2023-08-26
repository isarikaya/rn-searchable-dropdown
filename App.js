import { StyleSheet, View, Alert } from "react-native"
import SearchableDropdown from "./components/SearchableDropDown"
import { cities } from "./cities"

export default function App() {
  const selectedItem = (item) => {
    Alert.alert("Seçilen il", item.name, [
      { text: "Tamam", style: "destructive" },
    ])
  }
  return (
    <View style={styles.container}>
      <SearchableDropdown data={cities} onSelectItem={selectedItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
