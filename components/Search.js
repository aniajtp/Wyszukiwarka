earch = React.createClass({
    render: function() {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };

        return <input
             type="text"
             onChange={this.handleChange}
             placeholder="Tutaj wpisz wyszukiwaną frazę"
             style={styles}
             value={this.state.searchTerm}
            />
    }
});
getInitialState() {
    return {
      searchingText: ''
    };
};

handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({
        searchingText: searchingText
    });
};

<Search onSearch={this.handleSearch}/>
handleSearch: function(searchingText) {  // 1.
    this.setState({
      loading: true  // 2.
    });
    this.getGif(searchingText, function(gif) {  // 3.
      this.setState({  // 4
        loading: false,  // a
        gif: gif,  // b
        searchingText: searchingText  // c
      });
    }.bind(this));
}