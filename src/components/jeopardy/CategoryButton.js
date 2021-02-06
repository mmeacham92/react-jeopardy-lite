import React from "react";

class CategoryButton extends React.Component {
  render() {
    const print = () => {
      console.log(this.props.name);
    };
    return (
      <button
        onClick={() => {
          print();
          this.props.updateSelectedCategory(this.props.name);
        }}
        name={this.props.name}
      >
        {this.props.name}
      </button>
    );
  }
}

export default CategoryButton;
