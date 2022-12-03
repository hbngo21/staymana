import * as React from "react";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import { HouseCard } from "../../components";

const width = Dimensions.get("window").width;

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

export const HouseList = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {houseList.map(house => (
         <HouseCard avatar={house.avatar} name={house.name} address={house.address} />
      ))}
      </ScrollView>
    </SafeAreaView>
  );
};