import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ContactScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Kontak Saya</Text>
    <View style={styles.contactItem}>
      <Icon name="envelope" size={40} color="#333" style={styles.icon} />
      <Text style={styles.text}>Email: ayudewanti2005@email.com</Text>
    </View>
    <View style={styles.contactItem}>
      <Icon name="instagram" size={40} color="#E1306C" style={styles.icon} />
      <Text style={styles.text}>Instagram: @ayudewantisuci</Text>
    </View>
  </View>
);

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10
  },
  text: {
    fontSize: 30,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  icon: {
    marginRight: 10
  }
});
