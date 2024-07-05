import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import ChoosePackage from "../../../../components/BookingComponents/ChoosePackage";
import CalendarPage from "../../../../components/BookingComponents/CalendarPage";
import BudgetPackage from "../../../../components/BookingComponents/BudgetPackage";
import ReviewPackage from "../../../../components/BookingComponents/ReviewPackage";
import CustomButton from "../../../../components/CustomButton/CustomButton";

import { FontAwesome6 } from "@expo/vector-icons";
import { Circle, Svg } from "react-native-svg";
import { router } from "expo-router";
import { useContext } from "react";
import ThemeContext from "../../../../theme/ThemeContext";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (showModal && completionPercentage < 100) {
      const interval = setInterval(() => {
        setCompletionPercentage((prevPercentage) => {
          const newPercentage = prevPercentage + 5; // Increment completion by 5%
          return newPercentage >= 100 ? 100 : newPercentage; // Cap completion at 100%
        });
      }, 500);

      return () => clearInterval(interval);
    } else if (completionPercentage === 100) {
      // Navigate to home page when booking is complete
      navigateToHomePage();
    }
  }, [showModal, completionPercentage]);

  const navigateToHomePage = () => {
    setCompletionPercentage(0);
    setShowModal(false);
    router.push("Home");
    setCurrentStep(1);
  };

  const goBack = () => {
    setCurrentStep(currentStep > 1 ? currentStep - 1 : currentStep);
  };

  const handleBookTrip = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setCompletionPercentage(0);
  };

  const handleNextPress = () => {
    setCurrentStep(currentStep < 4 ? currentStep + 1 : currentStep);
    if (currentStep === 4) {
      handleBookTrip();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ChoosePackage />;
      case 2:
        return <CalendarPage />;
      case 3:
        return <BudgetPackage />;
      case 4:
        return <ReviewPackage />;
      default:
        return <ChoosePackage />;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <FontAwesome6 name="arrow-left-long" size={23} color={theme.color} />
        </TouchableOpacity>

        <View style={styles.pageProgressContainer}>
          {[1, 2, 3, 4].map((step) => (
            <View
              key={step}
              style={{
                ...styles.pageProgress,
                backgroundColor:
                  currentStep >= step
                    ? "rgba(0, 137, 221, 1)"
                    : "rgba(0, 137, 221, 0.1)",
              }}
            />
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderStep()}
      </ScrollView>

      <CustomButton
        text={currentStep === 4 ? "Book My Trip" : "Next"}
        onPress={handleNextPress}
      />

      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Svg width={50} height={50} style={styles.spinner}>
              <Circle
                cx="25"
                cy="25"
                r="20"
                stroke="#ccc"
                strokeWidth="5"
                fill="transparent"
              />
              <Circle
                cx="25"
                cy="25"
                r="20"
                stroke="#007bff"
                strokeWidth="5"
                fill="transparent"
                strokeDasharray={`${(completionPercentage * 126) / 100}, 126`}
              />
            </Svg>
            <Text style={styles.progressTextHeading}>
              Booking your trip.. {completionPercentage}%
            </Text>
            <Text style={styles.progressText}>
              Eget arcu dictum varius duis at consectetur lorem donec. Mattis
              vulputate enim nulla aliquet luctus accumsan tortor.
            </Text>
            <CustomButton text="cancel" onPress={handleCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pageProgressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
    gap: 10,
  },
  pageProgress: {
    width: 40,
    height: 10,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  spinner: {
    alignSelf: "center",
  },
  progressTextHeading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
