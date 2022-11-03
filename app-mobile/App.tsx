import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading, CustomStatusBar } from "./src/components";
import { THEME } from "./src/styles/theme";
import { Signin } from "./src/screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <CustomStatusBar />
      {!fontsLoaded ? <Loading /> : <Signin />}
    </NativeBaseProvider>
  );
}
