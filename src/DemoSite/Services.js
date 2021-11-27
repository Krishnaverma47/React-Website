import React from "react";
import Card from "./Card";
import SData from "./CardApi";
function Services() {
    return (
        <>
            <section className="newSection">
                <div className=" container">
                    <div className="row">
                        <h4 className="text-center my-4 text-secondary fs-3 fw-normal">
                            Our Services
                        </h4>
                        {SData.map((val, ind) => {
                            return (
                                <Card
                                    title={val.title}
                                    imageSource={val.imageSource}
                                ></Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
