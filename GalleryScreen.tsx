import React from "react";
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from "react-native";

const imageUrls = [
  "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/14/4e0a8e86-eef1-448d-b335-90ecec254589.jpg",
  "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/3/3eed9f69-d147-41dd-b7ab-e3d03048cde8.jpg",
  "https://assets.kompasiana.com/items/album/2024/03/16/funny-cat1-65f541fbde948f7e6d16fd44.jpg?t=o&v=770",
  "https://i.pinimg.com/564x/21/8c/fd/218cfd559a3faa2806adf8f0d6ed1e34.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxxlxlA6rsLV_3ItN37R5afUEudBc5PsKEnTATGMFs4GD-7Hywai4swqWTfNjhx1XU-g&usqp=CAU",
  "https://down-id.img.susercontent.com/file/fe72e8a736cef39517e114377c2a163f",
  "https://ae01.alicdn.com/kf/Sbb9dec3d37da4cf5b2d92d1641812f8cB.png",
  "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/7/21/86e25d3b-6ae5-412b-9748-4973792a5fbd.jpg"
];

const GalleryScreen: React.FC = () => {
  const { width } = useWindowDimensions(); // Dapatkan lebar layar
  const isMobile = width < 768; // Anggap lebar < 768px adalah mobile

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeri</Text>
      <FlatList
        data={imageUrls.map((src, index) => ({ id: index.toString(), src }))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={{ uri: item.src }} style={styles.image} />}
        horizontal={!isMobile} // Jika mobile, vertikal. Jika desktop, horizontal
        numColumns={isMobile ? 2 : 1} // Untuk mobile, grid 2 kolom agar lebih rapi
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
});
