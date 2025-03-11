import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Reading: undefined;
  ArticleDetail: { article: Article };
};

type Article = {
  id: string;
  title: string;
  content: string;
};

const articles: Article[] = [
  {
    id: "1",
    title: "Pengantar JavaScript",
    content: "JavaScript adalah bahasa pemrograman yang digunakan untuk pengembangan web. Bahasa ini awalnya dikembangkan untuk membuat halaman web menjadi lebih interaktif. Saat ini, JavaScript tidak hanya digunakan di front-end (client-side) tetapi juga di back-end (server-side) dengan teknologi seperti Node.js. JavaScript mendukung paradigma pemrograman seperti object-oriented, functional, dan event-driven programming. Dengan ekosistem yang luas, JavaScript memiliki banyak library dan framework populer seperti React, Angular, dan Vue.js."
  },
  {
    id: "2",
    title: "Mengenal React Native",
    content: "React Native adalah framework yang memungkinkan pengembang membuat aplikasi mobile dengan JavaScript dan React. Dibangun oleh Facebook, React Native memungkinkan pengembang untuk membuat aplikasi cross-platform (iOS dan Android) dengan satu basis kode. Keunggulan React Native termasuk performa yang mendekati native, hot reloading untuk pengembangan yang lebih cepat, dan komunitas yang besar. Dengan komponen yang dapat digunakan kembali, React Native membantu mengurangi waktu pengembangan dan memudahkan maintenance aplikasi."
  },
  {
    id: "3",
    title: "Pemrograman Backend dengan Node.js",
    content: "Node.js adalah runtime JavaScript yang memungkinkan eksekusi kode di server. Dibangun di atas mesin V8 Google Chrome, Node.js dikenal karena performanya yang tinggi dan kemampuan non-blocking I/O. Node.js sangat cocok untuk aplikasi real-time seperti chat, streaming, dan API. Dengan package manager seperti npm, Node.js memiliki ekosistem modul yang sangat luas, termasuk Express.js untuk pembuatan server, Socket.io untuk real-time communication, dan Mongoose untuk integrasi dengan MongoDB. Node.js juga mendukung arsitektur microservices yang modern."
  }
];

type ReadingScreenProps = StackScreenProps<RootStackParamList, "Reading">;

const ReadingScreen: React.FC<ReadingScreenProps> = () => (
	<View style={styles.safeArea}>
	  <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
		<Text style={styles.title}>Materi Bacaan</Text>
		{articles.map((article) => (
		  <View key={article.id} style={styles.card}>
			<Text style={styles.cardTitle}>{article.title}</Text>
			<Text>{article.content}</Text>
		  </View>
		))}
	  </ScrollView>
	</View>
  );

export default ReadingScreen;

const styles = StyleSheet.create({
	safeArea: {
	  flex: 1,
	  backgroundColor: "#fff",
	},
	scrollView: {
	  flex: 1, // Tambahkan flex: 1 agar ScrollView mengambil seluruh layar
	  overflow: "scroll",
	},
	container: {
	  padding: 20,
	  flexGrow: 1, // Pastikan kontennya bisa di-scroll jika melebihi layar
	},
	title: {
	  fontSize: 20,
	  fontWeight: "bold",
	  marginBottom: 10,
	},
	card: {
	  backgroundColor: "#f8f9fa",
	  padding: 15,
	  marginVertical: 10,
	  borderRadius: 10,
	  shadowColor: "#000",
	  shadowOffset: { width: 0, height: 2 },
	  shadowOpacity: 0.1,
	  shadowRadius: 3,
	  elevation: 3,
	},
	cardTitle: {
	  fontSize: 18,
	  fontWeight: "bold",
	},
  });