import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
const aiseHiImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAAe1BMVEX///8ArEdbuXQAgy37/ftvwIQAgChGp18AgCsAq0MAokFNuGgAnz++4scApjT3/PgpsVUir09Is2bc7+EvtFvQ6da34MKFyJZ4w4tBsWFOsGjx+vQAqj2Vz6TI5c/l8+g9pFgAoycAmDA1m1Cq2LMAmDsAjTNUvHJjwX4YRj4AAAABtUlEQVRoge3ai26CMBiG4RYU7TYQQRAHiDiU3f8Vzm2JG9ISv1IaE//3AnjSA+HIGEVRFHVHM+20xXQ71y4rEx1z70TOmKJsBZv+OPKnHDSr3XjTyUB0a8B0dti6zkwM1HFKCI0NrOilDDp1EjPonFBCCSV0PLp/GtTO9FZ+mqb+tfKwuL93PTTZ1EGn49JD+tBAy1rwbm9LF8lzYbSp+W0geglE86Bn4qh8htVoWRhAXQ9D29sF1UNle1iJrjZm0AWhhBI6HRr2TUIJJZRQQgk1hK4JfQr0xQy6VZhylKOmFI18DD3Bz4qykSq/V8hR7oKqBB14ha9A+Rl8A9BDo73SVKL8dF4CeYeoU1tWalONfm/i+zs28f+q4c9PQyhQoNypj4NyybPM9KiRCCWUUEIfCB24ek6G1tCvFGZQ0SImWxm5yNSxdVQEDWQqUIEUhNDWVaAifAX6bNA/Y2SoCOGjjEbFZmqzj4r15GYPFeuhu+RpUCGwM84EKrgNs4vaGWcXtWV20ELrZz+NcmHfZHlh3/xDA3vmdXqxm5yx/X6etmuypChEYdlkLM7aucX1pCjqcfsCctJXhK4YMCIAAAAASUVORK5CYII=";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image
                    source={{ uri: aiseHiImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={{top: 0, marginBottom: 5, color: "#00b9fb", marginLeft: 20, fontSize: 30, fontWeight: "bold"}}>Chat</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            backgroundColor: "#fff",
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginLeft: 20,
            marginBottom: 50
        }
    });