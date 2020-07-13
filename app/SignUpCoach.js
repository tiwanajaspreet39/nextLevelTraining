
import React from 'react';
import {
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	StatusBar,
	Dimensions,
} from 'react-native';

const BACKGROUND_COLOR = 'black'//'#282830'
const SELECTED_COLOR = '#D5C3A8'
const TABBAR_COLOR = 'black'//'#111118'
const TEXT_COLOR = '#D5C3A8'

const signupSegments = ['ABOUT ME', 'PITCHING AREA', 'AVAILABILITY', 'TRAVEL', 'FINANCE']

export default class SignUpCoach extends PureComponent {
	static navigationOptions = {
		title: 'Player',
	};

	constructor(props) {
		super(props);

		this.state = {
			signupSelectedIndex: 0
		};
	}

	componentDidMount = async () => {

	}

	componentWillUnmount() {
		
	}


	render() {
		return (
			<SafeAreaView style={{
				flex: 1,
				backgroundColor: BACKGROUND_COLOR
			}}>
				<StatusBar backgroundColor={BACKGROUND_COLOR} />
				{this.containerView()}

			</SafeAreaView>
		);
	}


	
}
