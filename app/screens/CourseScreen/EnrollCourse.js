import React from "react";
import { StyleSheet, ScrollView, Text, TextInput, View } from "react-native";

import { PricingCard } from "react-native-elements";

const EnrollCourse = () => {
  return (
    <ScrollView>
      <PricingCard
        color="#4f9deb"
        title="Free"
        price="₼0"
        info={["1 User", "Basic Support", "All Core Features"]}
        button={{ title: "  GET STARTED", icon: "payments" }}
        onButtonPress={() => alert('YAY!!')}
      />
      <PricingCard
        color="#A72CE9"
        title="Starter"
        price="₼9.99"
        info={["5 User", "Basic Support", "All Core Features"]}
        button={{ title: "GET STARTED", icon: "flight-takeoff" }}
      />
      <PricingCard
        color="lightgreen"
        title="Pro"
        price="₼19.99"
        info={["10 Users", "Basic Support", "All Core Features"]}
        button={{ title: "GET STARTED", icon: "flight-takeoff" }}
      />
    </ScrollView>
  );
};

export default EnrollCourse;

const styles = StyleSheet.create({});
