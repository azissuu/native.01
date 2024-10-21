import { Link } from "expo-router"; // Jika Anda menggunakan expo-router
import { View, Text, Image } from "react-native";
import React from "react";

export default function IndexScreen() {
  return (
    <View
      style={{
        flex: 1, // Ensures the view takes up the whole screen
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Container for Image and Text */}
      <View style={{ width: "100%", height: 920 }}>
        {/* Image */}
        <Image
          source={require("./../assets/images/login.png")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute", // Make the image fill the container
          }}
        />

        {/* Text overlay */}
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -50 }, { translateY: -50 }],
          }}
        >
          <Link href={"/login"}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "yellow", // Set text color to yellow
                textShadowColor: "rgba(0, 0, 0, 0.75)", // Shadow color
                textShadowOffset: { width: -1, height: 1 }, // Offset the shadow
                textShadowRadius: 5,
                // Blur radius for the shadow
              }}
            >
              Login
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
