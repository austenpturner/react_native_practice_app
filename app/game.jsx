import { StyleSheet, Text, View } from "react-native";
import { DeviceMotion } from "expo-sensors";
import * as Haptics from "expo-haptics";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState, useRef } from "react";
const GameScreen = () => {
  const [status, setStatus] = useState("Waiting...");
  const cooldownRef = useRef(false);

  useEffect(() => {
    // Lock to landscape
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );

    // Start listening to motion
    DeviceMotion.setUpdateInterval(200); // Update every 200ms

    const subscription = DeviceMotion.addListener((motionData) => {
      const beta = motionData.rotation?.beta;

      if (typeof beta !== "number") return;

      // Prevent triggering again until cooldown ends
      if (cooldownRef.current) return;

      // Tilt Down (Correct) - Forehead to floor
      if (beta < -60) {
        handleTilt("Correct!");

        // Tilt Up (Pass) - Forehead to ceiling
      } else if (beta > 60) {
        handleTilt("Pass!");
      }
    });

    return () => subscription.remove();
  }, []);

  const handleTilt = async (result) => {
    cooldownRef.current = true;
    setStatus(result);

    // Vibrate for feedback
    await Haptics.notificationAsync(
      result === "Correct!"
        ? Haptics.NotificationFeedbackType.Success
        : Haptics.NotificationFeedbackType.Warning
    );

    // Return to "Waiting..." after a delay
    setTimeout(() => {
      setStatus("Waiting...");
      cooldownRef.current = false;
    }, 2000); // 2-second cooldown
  };

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 100 }}>
        {status}
      </Text>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({});
