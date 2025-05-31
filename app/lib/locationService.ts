import * as Location from 'expo-location';
import { saveLocationPoint } from './storage';

export const startLocationTracking = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Location permission denied');
    return;
  }

  Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 30000,
      distanceInterval: 10,
    },
    (location) => {
      const { latitude, longitude } = location.coords;
      saveLocationPoint({ latitude, longitude, timestamp: new Date().toISOString() });
    }
  );
};
