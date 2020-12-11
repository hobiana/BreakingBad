import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import Characterlist from '../../components/Characterlist';
import { connect } from 'react-redux'
import { charactersFetchData } from '../../actions/CharacterActions'

function HomeScreen(props) {
    const [page, setpage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    _loadCharacters = () => {
        props.fetchData(pageSize, page)
        setpage(page + 1)
    }

    _displayLoading = () => {
        if (props.charactersList.length == 0) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color='#292D3E' />
                    <Text>Loading....</Text>
                </View>
            )
        }
    }

    useEffect(() => {
        _loadCharacters();
    }, []);

    return (
        <View style={styles.main_container}>
            <Characterlist
                characters={props.charactersList}
                navigation={props.navigation}
                loadCharacters={_loadCharacters}
            />
            {_displayLoading()}
        </View >

    );
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1
        // marginTop: 50
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
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
    }
})

const mapStateToProps = (state) => {
    return {
        charactersList: state.characters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (pageSize, page) => dispatch(charactersFetchData(pageSize, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)