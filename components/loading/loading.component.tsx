import { useState, useEffect, useMemo } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text } from 'react-native';

const gifs = [
    require('../../assets/icons/loading-1.json'),
    require('../../assets/icons/loading-2.json'),
    require('../../assets/icons/loading-3.json'),
    require('../../assets/icons/loading-4.json'),
];

const LoadingComponent = () => {

    const randomGif = useMemo(() => {
        const index = Math.floor(Math.random() * gifs.length);
        return gifs[index];
    }, []);

    return (
        <View className="absolute inset-0 flex justify-center items-center bg-white/50">
            <LottieView
                source={randomGif}
                style={{ width: 120, height: 120 }}
                autoPlay
                loop
            />
        </View>
    );
};

export default LoadingComponent;
