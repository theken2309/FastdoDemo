import React from "react";
import { Text, View, ScrollView, Image, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider, AreaProvider } from "react-native-safe-area-context";
import "../../../global.css";
import { PostLogin } from "../../services/AuthenticationService";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigation();
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "243PA307D3",
    "authorization":
      "",
    "x-company-id": "",
    "x-client-id": "24AGCAA43F0D8F7",
  };
  const HandleLogin = async () => {
    var result = await PostLogin({ email: username, password: password }, headers);
    if (result == null) {
      alert("Đăng nhập thất bại");
    } else {
      console.log(result);
      navigate.navigate("Home");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <ScrollView>
          <View style={[styles.container]}>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={require("../../../assets/image/logo-fastdo.png")}
              />
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Text style={styles.title}>Chào mừng đến với Fastdo</Text>
              <Text style={{ color: "gray" }} className="underline">
                #1 Phần mềm quản lý công việc dành cho SMEs
              </Text>
            </View>
            <View style={{ display: "flex", gap: 8 }}>
              <Text style={styles.field}>Email:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <Text>Mật khẩu :</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TouchableOpacity style={styles.button} onPress={HandleLogin}>
                <Text style={styles.textPress}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 50,
    width: 200,
    resizeMode: "contain",
  },
  title: {
    display: "flex",
    color: "gray",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    paddingHorizontal: 8,
    height: 40,
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
    height: 50,
    borderBlockColor: "gray",
    backgroundColor: "blue",
  },
  textPress: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 15,
  },
});
