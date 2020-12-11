import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import { Button, ListItem, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { characterDetailFetchData, clearCharacterFetchData, randomQuoteFetchData } from '../../actions/CharacterActions'

function ProfileScreen(props) {
    const [comment, setComment] = useState('');

    _loadCharacter = (id) => {
        props.fetchData(id)
    }

    _displayLoading = () => {
        if (Object.keys(props.charactersDetail).length == 0) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color='#292D3E' />
                    <Text>Loading...</Text>
                </View>
            )
        }
    }

    _handleChangeQuote = () => {
        props.getNewRandomQuote();
    }

    _displayCharacter = () => {
        let character = props.charactersDetail
        if (character != undefined && Object.keys(character).length !== 0) {
            return (
                <>
                    <ScrollView style={styles.scrollview_container} scrollEnabled={true} persistentScrollbar={true} alwaysBounceVertical={true}>
                        <View style={styles.image_container}>
                            <Image
                                style={styles.image}
                                source={{ uri: character.img }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.title_text}>{character.name}</Text>
                            <Card>
                                <Card.Title style={{ paddingBottom: 0 }}>Characters's description</Card.Title>
                                <Card.Divider />
                                <ListItem key={0} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Quote</ListItem.Subtitle>
                                        <ListItem.Title style={styles.quote_text}>"{props.randomQuote.quote}"</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron
                                        name="refresh"
                                        size={20}
                                        color="gray"
                                        onPress={_handleChangeQuote}
                                    />
                                </ListItem>
                                <Card.Divider />
                                <ListItem key={1} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Nickname</ListItem.Subtitle>
                                        <ListItem.Title>{character.nickname}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                <ListItem key={2} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Birthday</ListItem.Subtitle>
                                        <ListItem.Title>{character.birthday}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                <ListItem key={3} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Status</ListItem.Subtitle>
                                        <ListItem.Title>{character.status}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                <Card.Divider />
                                <ListItem key={4} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Appearance</ListItem.Subtitle>
                                        <ListItem.Title>Season {character.appearance.join(", ")}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                <ListItem key={5} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Occupations</ListItem.Subtitle>
                                        <ListItem.Title>{character.occupation.join(" / ")}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                                <ListItem key={6} >
                                    <ListItem.Content>
                                        <ListItem.Subtitle>Portrayed</ListItem.Subtitle>
                                        <ListItem.Title>{character.portrayed}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            </Card>
                        </View>
                        <View style={styles.comment_container}>
                            <TextInput
                                style={styles.input}
                                editable
                                numberOfLines={2}
                                onChangeText={(text) => setComment(text)}
                                value={comment}
                                placeholder={'Insert comment'}
                            />
                            <Button
                                style={styles.btn}
                                icon={
                                <Icon
                                    name="arrow-right"
                                    size={25}
                                    color="gray"
                                />
                            }
                                type="clear"
                            />
                        </View>
                    </ScrollView>
                </>
            )
        }
    }

    useEffect(() => {
        console.log(props)
        let id = props.route.params.idCharacter
        _loadCharacter(id);
        return () => {
            props.clearCharacter();
        }
    }, []);

    return (
        <View style={styles.main_container} >
            {_displayCharacter()}
            {_displayLoading()}
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        flex: 1
        // backgroundColor: 'blue'
    },
    scrollview_container: {
        flexGrow: 1,
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor: 'blue'
    },
    loading_container: {
        color: 'red',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_container: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        // backgroundColor: 'red'
    },
    description: {
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        padding: 15,
        flex: 1,
        // backgroundColor: 'green'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#000',
        textAlign: 'center'
    },
    default_text: {
        alignItems: 'stretch',
        fontSize: 15,
        flexDirection: 'row'
    },
    quote_text: {
        // flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    quote_container: {
        backgroundColor: '#F6F6F6',
        padding: 5,
        elevation: 3,
    },
    comment_container: {
        padding: 15,
        flexDirection: 'row'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        flex: 3
    },
    btn: {
        flex: 1,
        height: 'auto',
        alignItems: 'center'
    }
})


const mapStateToProps = (state) => {
    return {
        charactersDetail: state.character,
        randomQuote: state.quote
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (idCharacter) => {
            dispatch(characterDetailFetchData(idCharacter))
            dispatch(randomQuoteFetchData())
        },
        getNewRandomQuote: () => dispatch(randomQuoteFetchData()),
        clearCharacter: () => dispatch(clearCharacterFetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)