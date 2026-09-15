import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useColors } from '@/hooks/useColors';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
  const colors = useColors();
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.mutedForeground, tabBarLabelStyle: { fontFamily: 'Inter_600SemiBold', fontSize: 10 }, tabBarStyle: { height: Platform.OS === 'web' ? 84 : 68, paddingBottom: Platform.OS === 'web' ? 28 : 8, paddingTop: 7, backgroundColor: colors.card, borderTopColor: colors.border, borderTopWidth: 1 }, tabBarBackground: () => <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.card }]} /> }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <Feather name="home" size={21} color={color} /> }} />
      <Tabs.Screen name="jobs" options={{ title: 'Jobs', tabBarIcon: ({ color }) => <Feather name="briefcase" size={21} color={color} /> }} />
      <Tabs.Screen name="post-job" options={{ title: 'Post job', tabBarIcon: ({ color }) => <Feather name="plus-square" size={21} color={color} /> }} />
      <Tabs.Screen name="messages" options={{ title: 'Messages', tabBarIcon: ({ color }) => <Feather name="message-circle" size={21} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color }) => <Feather name="user" size={21} color={color} /> }} />
    </Tabs>
  );
}
