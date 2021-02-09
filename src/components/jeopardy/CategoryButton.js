import React from "react";

class CategoryButton extends React.Component {
  render() {
    const updateQuestion = () => {
      this.props.updateQuestionIndex(this.props.index);
    };

    return (
      <button
        className="category__button"
        onClick={updateQuestion}
        name={this.props.name}
      >
        {this.props.capitalizeEachWord(this.props.name) }
      </button>
    );
  }
}

export default CategoryButton;
