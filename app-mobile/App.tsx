import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading, CustomStatusBar } from "./src/components";
import { THEME } from "./src/styles/theme";
import { Signin, New } from "./src/screens";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Find } from "./src/screens/Find";
import { Pools } from "./src/screens/Pools";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <CustomStatusBar />
      <AuthContextProvider>
        {!fontsLoaded ? <Loading /> : 
        // <Signin />
        // <New />
        // <Find />
        <Pools />
        }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
