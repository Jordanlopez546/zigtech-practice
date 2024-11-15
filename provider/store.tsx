import { create } from "zustand";
import { AppState } from "../types/types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create<AppState>((set) => ({
  isLoggedIn: false,
  user: null,
  error: null,
  isInitialized: false,
  
  initializeAuth: async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        set({ isLoggedIn: true, user, isInitialized: true });
      } else {
        set({ isInitialized: true });
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
      set({ isInitialized: true });
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post("https://shielded-hub-apis.vercel.app/auth/login", {
        email,
        password
      });
      
      if (response.status === 200) {
        const {username, email} = response.data.user;
        const userData = {username, email};
        
        // Store user data in AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        
        set((state) => ({
          isLoggedIn: true,
          user: userData,
          error: null
        }));
        return { success: true };
      } else {
        set((state) => ({
          error: "Invalid credentials"
        }));
        return { success: false, error: "Invalid credentials" };
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
      set((state) => ({
        error: errorMessage
      }));
      return { success: false, error: errorMessage };
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('user');
      set((state) => ({
        isLoggedIn: false,
        user: null,
        error: null
      }));
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }
}));