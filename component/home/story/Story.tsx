import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import users from "../../../data/users";

const Story = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((data, index) => (
          <TouchableOpacity key={index} style={styles.story}>
            <Image
              style={styles.storyImage}
              source={{ uri: data.profileImage }}
            />
            <Text style={{ color: "#fff" }}>
              {data.name.length > 6 ? `${data.name.slice(0, 6)}...` : data.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  story: {
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
