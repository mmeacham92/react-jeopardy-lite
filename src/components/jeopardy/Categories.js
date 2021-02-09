import React from "react";

import CategoryButton from "./CategoryButton";

class Categories extends React.Component {
  render() {
    // returns a button with the name and text field === category.title for each of our objects in our state.data array
    if (this.props.currentQuestionIndex !== null) return <div></div>
    const buttons = this.props.data.map((item, index) => {
      return (
        <CategoryButton
          name={item?.category?.title}
          key={item.id}
          updateQuestionIndex={this.props.updateQuestionIndex}
          capitalizeEachWord={this.props.capitalizeEachWord}
          index={index}
        />
      );
    });
    return (
      <div className="categories__div">
        <h2>Select a Category</h2>
        <div className="categories__buttons">{buttons}</div>
      </div>
    );
  }
}

export default Categories;
