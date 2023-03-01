import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export class BottomSheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }
    
    render() {
        return (
            <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
                <View style={[styles.bottomSheetContainer, { bottom: (this.state.value - SCREEN_HEIGHT) + 100 }]}>
                    {/* top line */}
                    <Text style={styles.line}>hello</Text>
                    {/* content */}
                    <View onLayout={(e) => this.setState({ value: e.nativeEvent.layout.height })}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "#002333",
        position: 'absolute',
        borderRadius: 25,
        padding: 10
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: "grey",
        color: "grey",
        alignSelf: "center",
        marginVertical: 15
    }
})

export default BottomSheet