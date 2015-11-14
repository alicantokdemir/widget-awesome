var React = require('react')
var Header = require('./Header.jsx')
var Button = require('./Button.jsx')

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  render: function () {
    var title = 'Please Like'

    var header = <Header title={title} />
    var button = <Button />
    return <div className='Page'>
      {header}
      {button}
    </div>
  }
})
