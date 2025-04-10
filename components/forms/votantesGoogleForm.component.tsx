import CloseButton from "components/buttons/closeButton.component";
import { View } from "react-native";
import { WebView } from "react-native-webview";

interface Props {
    closePress: () => void;
}

export const Google_FormularioVotantes = ({closePress}: Props) => {
    return (
        <View className="h-full w-full bg-white">
            <CloseButton onPress={closePress} />
            <WebView
                source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScyOh33C-1g4XTx8JfMfBF-K8trVry6205KUJ2AQuxLnUNVAg/viewform?usp=dialog' }}
                style={{ flex: 1 }}
            />
        </View>
    );
};