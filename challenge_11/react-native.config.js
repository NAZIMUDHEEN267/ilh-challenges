module.exports = {
    project: {
        ios: {},
        android: {

        },
    },
    assets: ['./src/Assets/Icons'],
    dependencies: {
        'react-native-video': {
            platforms: {
                android: {
                    sourceDir: '../node_modules/react-native-video/android-exoplayer',
                },
            },
        },
    },
};