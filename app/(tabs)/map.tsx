import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { loadTodayRoute, LocationPoint } from '../lib/storage';

export default function MapScreen() {
  const [route, setRoute] = useState<LocationPoint[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await loadTodayRoute();
      setRoute(data);
    };

    const interval = setInterval(load, 10000);
    load();
    return () => clearInterval(interval);
  }, []);

  const latest = route[route.length - 1];

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {route.length > 0 && (
          <>
            <Polyline
              coordinates={route.map(p => ({ latitude: p.latitude, longitude: p.longitude }))}
              strokeColor="#2e86de"
              strokeWidth={4}
            />
            {latest && (
              <Marker coordinate={{ latitude: latest.latitude, longitude: latest.longitude }} />
            )}
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
