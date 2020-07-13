import React, { Component } from 'react'
import {View,StatusBar,FlatList,Image,Text,ScrollView} from 'react-native'
import Header from '../../components/header/Header'

class MultiStep extends Component {

     /*mySongsView() {
    return (
<View style={{
    flex: 1,
    paddingBottom: (!this.state.isMaximize && this.state.playingTrack != null) ? 65 : 0
}}>
<View style={{
    height: 50,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
}}>
<Text style={{
    fontSize: 17,
    color: 'white'
}}>
Library
</Text>
{/!* <View style={{
						height: 1,
						width: '100%',
						backgroundColor: 'white',
						position: 'absolute',
						bottom: 0
					}} /> *!/}
</View>

<View style={{
    flex: 1
}}>
<ScrollView style={{
    flex: 1,
    marginTop: 45
}}
horizontal={true}
pagingEnabled={true}
showsHorizontalScrollIndicator={false}
ref={(scrollView) => { this.homeScrollView = scrollView }}
onScroll={this.handleHomeScroll}
scrollEventThrottle={16}
>
{/!* Playlist Flatlist *!/}
<FlatList style={{
    flex: 1,
    width: Dimensions.get('window').width
}}
contentContainerStyle={{
    paddingBottom: 65
}}
//data={this.state.homeSongs}
//renderItem={this.playlistCell}
/>

{/!* Songs Flatlist *!/}
<FlatList style={{
    flex: 1,
    width: Dimensions.get('window').width
}}
contentContainerStyle={{
    paddingBottom: 65
}}
//data={this.state.homeSongs}
//renderItem={this.songCell}
/>

{/!* Albums Flatlist *!/}
<FlatList style={{
    flex: 1,
    width: Dimensions.get('window').width
}}
contentContainerStyle={{
    paddingBottom: 65
}}
//data={this.state.homeSongs}
//renderItem={this.albumCell}
/>

{/!* Artists Flatlist *!/}
<FlatList style={{
    flex: 1,
    width: Dimensions.get('window').width
}}
contentContainerStyle={{
    paddingBottom: 65
}}
//data={this.state.homeSongs}
//renderItem={this.artistCell}
/>

</ScrollView>
<FlatList style={{
    height: 40, width: '100%',
    position: 'absolute', top: 0
}}
horizontal
data={['PLAYLIST', 'SONGS', 'ALBUMS', 'ARTISTS']}
renderItem={({ item, index }) => {
    return (
        <TouchableOpacity style={{
            justifyContent: 'center',
            width: Dimensions.get('window').width / 4
        }}
                          onPress={() => {
                              this.setState({
                                  homeSelectedIndex: index
                              })
                              this.homeScrollView.scrollTo({ x: Dimensions.get('window').width * index })
                          }} >
            <Text style={{
                textAlign: 'center'
            }}>{item}</Text>
            {this.state.homeSelectedIndex == index && <View style={{
                position: 'absolute',
                height: 3,
                bottom: 0,
                width: '100%',
            }} />}
        </TouchableOpacity>
    )
}} />
</View>
</View>
)
}*/
 handleHomeScroll = async (event) => {
    let _index = event.nativeEvent.contentOffset.x / Dimensions.get('window').width
    if (_index == Math.round(_index)) {
        this.setState({
            homeSelectedIndex: Math.round(_index)
        })
    }
}
    render() {
        return (
            <View style={{flex:1}}>
                <Header toggleDrawer={this.props.toggleDrawer}/>
                <Text>here</Text>
            </View>
        )
    }
}

export default MultiStep
