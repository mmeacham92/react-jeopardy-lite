import React from "react";

import CategoryButton from "./CategoryButton";

class Categories extends React.Component {
  render() {
    const questions = this.props.data.map((item) => {
      return this.props.capitalizeEachWord(item?.category?.title);
    });
    const buttons = this.props.data.map((item) => {
      return (
        <CategoryButton
          name={this.props.capitalizeEachWord(item?.category?.title)}
          key={item.id}
          updateSelectedCategory={this.props.updateSelectedCategory}
        />
      );
    });
    return (
      <div className="Categories">
        <h2>Select a Category</h2>
        {buttons}
      </div>
    );
  }
}

export default Categories;
