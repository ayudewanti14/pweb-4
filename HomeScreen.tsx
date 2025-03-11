import React from "react";
import { View, Text, StyleSheet, Pressable, useWindowDimensions } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Reading: undefined;
  Gallery: undefined;
  Music: undefined;
  Contact: undefined;
};

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600; // Jika layar lebih dari 600px, dianggap mode laptop

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Favorit Saya!</Text>
      
      <CustomButton title="Baca Materi" onPress={() => navigation.navigate("Reading")} isLargeScreen={isLargeScreen} />
      <CustomButton title="Lihat Galeri" onPress={() => navigation.navigate("Gallery")} isLargeScreen={isLargeScreen} />
      <CustomButton title="Dengarkan Musik" onPress={() => navigation.navigate("Music")} isLargeScreen={isLargeScreen} />
      <CustomButton title="Kontak" onPress={() => navigation.navigate("Contact")} isLargeScreen={isLargeScreen} />
      
    </View>
  );
};

export default HomeScreen;

// Komponen tombol custom dengan sudut melengkung
const CustomButton: React.FC<{ title: string; onPress: () => void; isLargeScreen: boolean }> = ({ title, onPress, isLargeScreen }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { width: isLargeScreen ? 200 : "80%" },
        pressed && styles.buttonPressed, // Efek saat tombol ditekan
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, // Membuat ujung tombol lebih melengkung
    alignItems: "center",
    marginVertical: 10,
  },
  buttonPressed: {
    backgroundColor: "#005BBB", // Warna lebih gelap saat ditekan
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
