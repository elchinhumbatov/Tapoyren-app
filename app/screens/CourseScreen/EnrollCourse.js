import React from "react";
import { StyleSheet, ScrollView, Text, TextInput, View } from "react-native";

import { PricingCard } from "react-native-elements";

const EnrollCourse = ({route}) => {
  const {priceMonthly, priceQuarterly, priceSemianually, priceAnually} = route.params.prices;

  const handleEnroll = (name) => {
    alert(name + ' enrolled')
  }
  return (
    <ScrollView>
      {!!priceMonthly && <PricingCard
        color="#4f9deb"
        title="Monthly"
        price={"₼ "+ priceMonthly}
        info={["Some basic info if u want"]}
        button={{ title: "  GET STARTED", icon: "payments" }}
        onButtonPress={() => handleEnroll('Monthly')}
      />}
      {!!priceQuarterly && <PricingCard
        color="#A72CE9"
        title="Quarterly"
        price={"₼"+ priceQuarterly}
        info={["Some basic info if u want"]}
        button={{ title: "  GET STARTED", icon: "payments" }}
        onButtonPress={() => handleEnroll('Quarterly')}
      />}
      {!!priceSemianually && <PricingCard
        color="gray"
        title="Semianually"
        price={"₼"+ priceSemianually}
        info={["Some basic info if u want"]}
        button={{ title: "  GET STARTED", icon: "payments" }}
        onButtonPress={() => handleEnroll('Semianually')}
      />}
      {!!priceAnually && <PricingCard
        color="lightgreen"
        title="Anually"
        price={"₼"+ priceAnually}
        info={["Some basic info if u want"]}
        button={{ title: "  GET STARTED", icon: "payments" }}
        onButtonPress={() => handleEnroll('Anually')}
      />}
    </ScrollView>
  );
};

export default EnrollCourse;

const styles = StyleSheet.create({});
