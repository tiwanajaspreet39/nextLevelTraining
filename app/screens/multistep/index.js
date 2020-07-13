import React, { Component } from 'react'
import { View, StatusBar, FlatList, Image, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import Header from '../../components/header/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'

const signupSegments = ['ABOUT ME', 'PITCHING AREA', 'AVAILABILITY', 'TRAVEL', 'FINANCE']
const BACKGROUND_COLOR = 'black'//'#282830'
const TEXT_COLOR = 'gray'

class MultiStep extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedSegmentIndex: 0
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header toggleDrawer={this.props.toggleDrawer} />
                {this.containerView()}
            </View>
        )
    }

    handleContainerScroll = async (event) => {
        let _index = event.nativeEvent.contentOffset.x / Dimensions.get('window').width
        if (_index == Math.round(_index)) {
            this.setState({
                selectedSegmentIndex: Math.round(_index)
            })
            this.segmentFlatList.scrollToIndex({ index: Math.round(_index), animated: true })
        }
    }

    containerView() {
        return (
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
                    ref={(scrollView) => { this.containerScrollView = scrollView }}
                    onScroll={this.handleContainerScroll}
                    scrollEventThrottle={16}
                >
                    <View style={{
                        backgroundColor: 'green',
                        flex: 1,
                        width: Dimensions.get('window').width
                    }} />

                    <View style={{
                        backgroundColor: 'white',
                        flex: 1,
                        width: Dimensions.get('window').width
                    }} />

                    <View style={{
                        flex: 1,
                        width: Dimensions.get('window').width
                    }}>
                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Sunday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Monday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Tuesday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Wednesday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Thursday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Friday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <View style={{
                            width: '100%'
                        }}>
                            <View style={{
                                height: 60,
                                width: '100%',
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text>Saturday</Text>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 30,
                                    width: 60,
                                    borderRadius: 15
                                }}>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: 'lightgray',
                                height: 1,
                                marginHorizontal: 15
                            }} />
                        </View>

                        <TouchableOpacity style={{
                            backgroundColor: '#1111ff',
                            height: 30,
                            width: 70,
                            alignSelf: 'flex-end',
                            marginTop: 20,
                            marginRight: 15,
                            borderRadius: 5,
                            justifyContent: 'center'
                        }}
                        onPress = {() => {
                            this.setState({
                                selectedSegmentIndex: 3
                            })
                            this.segmentFlatList.scrollToIndex({ index: Math.round(3), animated: true })
                            this.containerScrollView.scrollTo({ x: Dimensions.get('window').width * 3 })
                        }}>
                            <Text style = {{
                                color: 'white',
                                textAlign: 'center'
                            }}>Skip</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        backgroundColor: 'green',
                        flex: 1,
                        width: Dimensions.get('window').width
                    }} />

                    <View style={{
                        backgroundColor: 'green',
                        flex: 1,
                        width: Dimensions.get('window').width
                    }} />

                </ScrollView>
                <FlatList style={{
                    height: 40,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                }}
                    ref={(ref) => {
                        this.segmentFlatList = ref
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={signupSegments}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={{
                                justifyContent: 'center',
                                width: Dimensions.get('window').width / 3,
                                height: 40
                            }}
                                onPress={() => {
                                    this.setState({
                                        selectedSegmentIndex: index
                                    })
                                    this.containerScrollView.scrollTo({ x: Dimensions.get('window').width * index })
                                }} >
                                <Text style={{
                                    color: this.state.selectedSegmentIndex == index ? '#6644bb' : TEXT_COLOR,
                                    textAlign: 'center'
                                }}>{item}</Text>
                                {this.state.selectedSegmentIndex == index && <View style={{
                                    position: 'absolute',
                                    height: 3,
                                    bottom: 0,
                                    width: '100%',
                                    backgroundColor: '#6644dd'
                                }} />}
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        )
    }
}

export default MultiStep
