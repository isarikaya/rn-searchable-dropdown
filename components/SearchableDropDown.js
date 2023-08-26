import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native"

const SearchableDropDown = ({ data, onSelectItem }) => {
  const [query, setQuery] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const search = (text) => {
    setQuery(text)
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    )
    setFilteredData(filtered)
  }

  const selectItem = (item) => {
    onSelectItem(item)
    setQuery(item.name)
    setFilteredData(data)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={query}
        onChangeText={search}
      />
      <View style={styles.list}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectItem(item)}>
              <Text style={{ padding: 10 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default SearchableDropDown

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  list:{
    width: 200,
    height:400,
    maxHeight: 500,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  }
})
