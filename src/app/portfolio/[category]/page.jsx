import React from "react";

const Category = async ({ params }) => {
    const param = await params;
    console.log(param);
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-semibold text-primary-500">
                {param.category.charAt(0).toUpperCase() +
                    param.category.slice(1)}
            </h3>
        </section>
    );
};

export default Category;
