App = React.createClass({
    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search />
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
          </div>
        );
    }
});
getInitialState() {
    return {
        loading: false,
        searchingText: '',
        gif: {}
    };
},
handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({searchingText: searchingText});

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  }

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  }

render: function() {
    var styles = {fontSize: '1.5em', width: '90%', maxWidth: '350px'};

    return <input
             type="text"
             onChange={this.handleChange}
             onKeyUp={this.handleKeyUp}
             placeholder="Tutaj wpisz wyszukiwaną frazę"
             style={styles}
             value={this.state.searchTerm}
            />
    0}
  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
        this.props.onSearch(this.state.searchingText);
    }
}
  this.props.onSearch(searchingText)

  onKeyUp={this.handleKeyUp}

