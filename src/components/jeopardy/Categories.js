import React from "react";

import CategoryButton from "./CategoryButton";

class Categories extends React.Component {
  render() {
    // renders an empty div if a category has been selected
    if (this.props.currentQuestionIndex !== null) return <div></div>;
    // returns a button with the name and text field === category.title for each of our objects in our state.data array
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

    const margin = { marginBottom: "3rem", fontSize: '2.5rem' };
    return (
      <div className="categories__div">
        <h2 style={margin}>Select a Category</h2>
        <div className="categories__buttons">{buttons}</div>
      </div>
    );
  }
}

export default Categories;
