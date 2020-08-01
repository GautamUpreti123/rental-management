import React, { useEffect, useState } from 'react';
import './category.css'

const Category = (props) => {

    const [branch, selectBranch] = useState({});
    const [title, setTitle] = useState(props.selectedBranch.name);

    useEffect(() => {
        selectBranch(props.selectedBranch);
    }, [props.selectedBranch])

    const selectCategory = (category) => {
        selectBranch(category);
        setTitle(`${title} / ${category.name}`);
    }

    return (
        <div className="container">
            <span className="breadcumb">{title}</span>
            {
                branch.categories && branch.categories.map((category, index) => (
                    category.name && <div key={index} className="box" onClick={() => selectCategory(category)}>
                        <img style={{ width: "185px", height: "199px" }} alt="no image" src={require(`../assets/images/${category.image}`)} />
                        <div className="footer">
                            {category.name}
                        </div>
                    </div>
                ))
            }
            {
                branch.subcategories && branch.subcategories.map((subCategory, index) => (
                    subCategory.name && <div key={index} className="box">
                        <img style={{ width: "185px", height: "199px" }} alt="no image" src={require(`../assets/images/${subCategory.image}`)} />
                        <div className="footer">
                            {subCategory.name}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Category;