import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { startLocationTracking } from '../lib/locationService';

export default function RootLayout() {
  useEffect(() => {
    startLocationTracking();
  }, []);

  return <Stack />;
}
