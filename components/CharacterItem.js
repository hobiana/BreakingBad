import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import FadeIn from '../animations/FadeIn'
export default function CharacterItem(props) {
    return (
        <FadeIn>
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => props.displayDetail(props.character.char_id)}
            >
                <View style={styles.content_container}>
                    <View style={styles.image_container}>
                        <Image style={{ flex: 1, borderRadius: 10 }} source={
                            {
                                uri: props.character.img
                            }
                        } />
                    </View>
                    <View style={styles.details_container}>
                        <Text style={styles.title_text}>{props.character.name}</Text>
                        <Text style={styles.nickname_text}>{props.character.nickname}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </FadeIn>
    );
}


const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        margin: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    content_container: {
        flex: 1,
        flexDirection: 'row'
    },
    image_container: {
        width: 100,
        height: 120,
        margin: 5,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    details_container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    header_container: {
        flex: 3,
        //backgroundColor: 'red'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    note: {
        flex: 1,
        //backgroundColor: 'brown'
    },
    description_container: {
        flex: 7,
        //backgroundColor: 'green'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5,
    },
    nickname_text: {
        fontStyle: 'italic',
        fontSize: 18,
        flexWrap: 'wrap',
        paddingRight: 5,
    },
    note_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    favorite_image: {
        width: 15,
        height: 15,
    }
})
