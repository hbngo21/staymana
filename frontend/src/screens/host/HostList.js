import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { ScreenSize } from "../../utils";
import { HouseCard } from "../../components";

const houseList = [
  {
    avatar: "https://thietkenhadepmoi.com/wp-content/uploads/2021/05/mau-nha-1-tret-1-lau-dep-9633.jpg",
    name: "Nhà trọ Hoa Mai",
    address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
  },
  {
    avatar: "https://kfa.vn/wp-content/uploads/2020/05/nha-dep-hien-dai.jpg",
    name: "Nhà trọ Hoa Đào",
    address: "48 Ba Tháng Hai, phường 11, quận 10, TP.HCM",
  },
  {
    avatar: "https://xaydungso.vn/webroot/img/images/thiet-ke-nha-2-tang-chu-l.jpg",
    name: "Nhà trọ Hoa Cúc",
    address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
  },
  {
    avatar: "https://static-images.vnncdn.net/files/publish/2022/11/29/nha-cap-4-1212.jpg?width=600",
    name: "Nhà trọ Hoa Cúc",
    address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
  },
  {
    avatar: "https://arcviet.vn/wp-content/uploads/2020/03/mat-tien-nha-gac-lung-dep-3-1.jpg",
    name: "Nhà trọ Hoa Cúc",
    address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
  },
]

export function HostList({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nhà trọ của bạn</Text>
      </View>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          {houseList.map(house => (
          <TouchableOpacity onPress={() => navigation.navigate("ViewHouse", { name: house.name })}>
           <HouseCard avatar={house.avatar} name={house.name} address={house.address}/>
          </TouchableOpacity>
          ))}
          <View style={{height: ScreenSize.height * 0.32}}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    width: "100%",
    height: ScreenSize.height * 0.156,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: ScreenSize.height * 0.05,
  },
  headerText: {
    fontSize: ScreenSize.width * 0.06,
    fontWeight: "600",
    color: "black",
    alignSelf: "center",
  },
});
