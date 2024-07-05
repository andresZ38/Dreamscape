import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import CreateName from "../../components/CreateAccount/CreateName";
import CustomButton from "../../components/CustomButton/CustomButton";
import CreateEmail from "../../components/CreateAccount/CreateEmail";
import CreatePassword from "../../components/CreateAccount/CreatePassword";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import ThemeContext from "../../theme/ThemeContext";

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const theme = useContext(ThemeContext);

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CreateName />;
      case 2:
        return <CreateEmail />;
      case 3:
        return <CreatePassword />;
      default:
        return <CreateName />;
    }
  };

  const handleNextPress = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle submit action
      router.push("SuccessPage");
    }
  };

  const getButtonText = () => {
    return currentStep === 3 ? "Submit" : "Next";
  };

  const getProgressStyle = (step) => {
    return {
      ...styles.pageProgress,
      backgroundColor:
        currentStep >= step ? "rgba(0, 137, 221, 1)" : "rgba(0, 137, 221, 0.1)",
    };
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <FontAwesome6 name="arrow-left" size={24} color={theme.color} />
      </TouchableOpacity>
      <ScrollView>{renderStep()}</ScrollView>
      <CustomButton text={getButtonText()} onPress={handleNextPress} />
      <View style={styles.pageProgressContainer}>
        <View style={getProgressStyle(1)}></View>
        <View style={getProgressStyle(2)}></View>
        <View style={getProgressStyle(3)}></View>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  backButton: {
    marginBottom: 15,
    marginTop: 20,
  },
  pageProgressContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pageProgress: {
    marginVertical: 10,
    width: 90,
    height: 7,
    borderRadius: 50,
  },
});
