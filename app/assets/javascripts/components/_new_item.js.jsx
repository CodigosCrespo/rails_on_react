const NewItem = React.createClass({

  handleClick() {
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (response) => {
        console.log('it worked!', response);
      }
    });
    // console.log(`The name value is ${name}
    //   \nThe description value is ${description}`);
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter item name' />
        <input ref='description' placeholder='Enter description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
