import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
];

const SELECTORS = [
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    durereDeCap : false,
    nasInfundat : false,
    durereInGat : false,
    dureriAbdominale : false,
    febra : false,
  };

  onButtonPress() {
    const { durereDeCap, nasInfundat, durereInGat, dureriAbdominale, febra } = this.props;
    this.props.patientCreate({ durereDeCap, nasInfundat, durereInGat, dureriAbdominale, febra })
    {
      const { currentUser } = firebase.auth();

      firebase.database().ref(`/Doctor/${currentUser.displayName}/raport1`)
        .push({ durereDeCap, nasInfundat, durereInGat, dureriAbdominale, febra });
    };


  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  onButtonPress () {
    const { durereDeCap,
      nasInfundat,
      durereInGat,
      dureriAbdominale,
      febra
    } = this.props

    this.props.raportCreate ({
      durereDeCap,
      nasInfundat,
      durereInGat,
      dureriAbdominale,
      febra
    });
  }

  render() {
    const { 
      multipleSelect, 
      activeSections,
      durereDeCap,
      nasInfundat,
      durereInGat,
      dureriAbdominale,
      febra, 
    } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>Raportul zilnic</Text>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Simptome</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <View style={styles.multipleToggle}>
                <Text style={styles.multipleToggle__title}>Aveti dureri de cap?</Text>
                <Switch
                  value={durereDeCap}
                  onValueChange={a => this.setState({ durereDeCap: a })}
                />
              </View>
            </View>
          </Collapsible>

          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <View style={styles.multipleToggle}>
                <Text style={styles.multipleToggle__title}>Aveti nas infundat?</Text>
                <Switch
                  value={nasInfundat}
                  onValueChange={a => this.setState({ nasInfundat: a })}
                />
              </View>
            </View>
          </Collapsible>

          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <View style={styles.multipleToggle}>
                <Text style={styles.multipleToggle__title}>Aveti dureti in gat?</Text>
                <Switch
                  value={durereInGat}
                  onValueChange={a => this.setState({ durereInGat: a })}
                />
              </View>
            </View>
          </Collapsible>

          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <View style={styles.multipleToggle}>
                <Text style={styles.multipleToggle__title}>Aveti febrea (Mai mare decat 37.5)?</Text>
                <Switch
                  value={febra}
                  onValueChange={a => this.setState({ febra: a })}
                />
              </View>
            </View>
          </Collapsible>

          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <View style={styles.multipleToggle}>
                <Text style={styles.multipleToggle__title}>Aveti dureri abdominale?</Text>
                <Switch
                  value={dureriAbdominale}
                  onValueChange={a => this.setState({ dureriAbdominale: a })}
                />
              </View>
            </View>
          </Collapsible>

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />

          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              this.onButtonPress.bind(this)
              Alert.alert("Raportul a fost trimis cu succes!");
            }}
          >
            <LinearGradient
              colors={['#4b0082', '#430075']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>Trimite raport</Text>
            </LinearGradient>
            
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});