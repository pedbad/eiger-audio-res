import React, { Component } from "react";
import audio_resourceData from "./data/audio_resource.json";
import Layout from "./components/Layout/Layout";
import LanguageList from "./components/LanguageList";
import LanguageDetail from "./components/LanguageDetail";

class App extends Component {
  state = {
    languages: [],
    selectedLanguage: null
  };

  onLanguageSelect = language => {
    console.log("From the App!", language);
    this.setState({ selectedLanguage: language });
    console.log(this.state.selectedLanguage);
  };

  componentDidMount() {
    this.setState({
      languages: audio_resourceData,
      selectedLanguage: audio_resourceData[0]
    });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <div className="app ui container" style={{ marginTop: "10px" }}>
            <div className="ui grid">
              <div className="ui row">
                <div className="three wide column">
                  <LanguageList
                    onLanguageSelect={this.onLanguageSelect}
                    languages={this.state.languages}
                  />
                </div>
                <div className="thirteen wide column">
                  <LanguageDetail language={this.state.selectedLanguage} />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
