// screens/MusicScreen.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const MusicScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Daftar Musik Favorit</Text>
    <FlatList
      data={["Last Night On Earth - Green Day",
	  "Hotel California - Eagles",
	  "Through The Years - Kenny Rogers",
	  "Officially Missing You - Tamia",
	  "End Of The Road - Boyz II Men",
	  "Always - Bon Jovi",
	  "Amtrak - Los Retros",
	  "If I Let You Go - Westlife",
	  "Kiss Me - Sixpence None The Richer",
	  "Goodbye - Air Supply"]}
      renderItem={({ item }) => <Text style={styles.listItem}>- {item}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5
  }
});
