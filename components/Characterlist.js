import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import CharacterItem from './CharacterItem'

export default function Characterlist(props, {navigation}) {

    _displayDetailForCharacter = (id) => {
        props.navigation.navigate('Profile', { idCharacter: id })
    }

    return (
        <FlatList
            data={props.characters}
            style={styles.list}
            keyExtractor={(item) => item.char_id.toString()}
            renderItem={({ item }) => (
                <CharacterItem
                    character={item}
                    displayDetail={_displayDetailForCharacter}
                />
            )}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                props.loadCharacters()
            }}
        >
        </FlatList>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
})