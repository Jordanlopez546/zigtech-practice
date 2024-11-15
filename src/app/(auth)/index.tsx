import { Redirect } from "expo-router";
import { useStore } from "../../../provider/store";

export default function Index() {
  const { isLoggedIn } = useStore();
  
  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }
  
  return <Redirect href="/(auth)/(note)" />;
}