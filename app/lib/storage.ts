import AsyncStorage from '@react-native-async-storage/async-storage';

export type LocationPoint = {
  latitude: number;
  longitude: number;
  timestamp: string;
};

const getTodayKey = () => new Date().toISOString().split('T')[0];

export const saveLocationPoint = async (point: LocationPoint) => {
  const key = getTodayKey();
  const existing = await AsyncStorage.getItem(key);
  const data = existing ? JSON.parse(existing) : [];
  data.push(point);
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const loadTodayRoute = async (): Promise<LocationPoint[]> => {
  const key = getTodayKey();
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
