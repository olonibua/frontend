import React from "react";
import node from "../../../models/icons/node.png";
import react from "../../../models/icons/react.png";
import mongo from "../../../models/icons/mongo.png";
import redux from "../../../models/icons/redux.png";
import tailwind from "../../../models/icons/tailwind.png";
import express from "../../../models/icons/express.png";
var UsedServices = function () {
    return (React.createElement("div", { className: "mx-auto max-w-[1300px] mt-10 p-3" },
        React.createElement("h2", { className: "text-black text-[18px] font-semibold p-3" }, "Technologies used"),
        React.createElement("div", { className: "grid grid-cols-2 p-3 md:grid-cols-3 mx-auto max-w-[1300px] gap-4" },
            React.createElement("div", { className: "item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] " },
                React.createElement("img", { src: node, className: "h-9 w-9 bg-white border p-[2px] rounded-full", alt: "node" }),
                React.createElement("div", { className: "grid p-[4px] mx-1" },
                    React.createElement("h2", { className: "text-[14px] font-bold" }, "Node"),
                    React.createElement("span", { className: " text-[12px] font-thin text-[#3d3d3d]" }, "Backend lauguage"))),
            React.createElement("div", { className: "item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] " },
                React.createElement("img", { src: react, className: "h-9 w-9 bg-white border p-[2px] rounded-full", alt: "node" }),
                React.createElement("div", { className: "grid p-[4px] mx-1" },
                    React.createElement("h2", { className: "text-[14px] font-bold" }, "React"),
                    React.createElement("span", { className: " text-[12px] font-thin text-[#3d3d3d]" }, "Frontend lauguage"))),
            React.createElement("div", { className: "item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] " },
                React.createElement("img", { src: express, className: "h-9 w-9 bg-white border p-[2px] rounded-full", alt: "node" }),
                React.createElement("div", { className: "grid p-[4px] mx-1" },
                    React.createElement("h2", { className: "text-[14px] font-bold" }, "Express"),
                    React.createElement("span", { className: " text-[12px] font-thin text-[#3d3d3d]" }, "Node framework"))),
            React.createElement("div", { className: "item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] " },
                React.createElement("img", { src: mongo, className: "h-9 w-9 bg-white border p-[2px] rounded-full", alt: "node" }),
                React.createElement("div", { className: "grid p-[4px] mx-1" },
                    React.createElement("h2", { className: "text-[14px] font-bold" }, "MongoDb"),
                    React.createElement("span", { className: " text-[12px] font-thin text-[#3d3d3d]" }, "NOSQL database system"))),
            React.createElement("div", { className: "item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] " },
                React.createElement("img", { src: redux, className: "h-9 w-9 bg-white border p-[2px] rounded-full", alt: "node" }),
                React.createElement("div", { className: "grid p-[4px] mx-1" },
                    React.createElement("h2", { className: "text-[14px] font-bold" }, "Redux"),
                    React.createElement("span", { className: " text-[12px] font-thin text-[#3d3d3d]" }, "State Management"))),
            React.createElement("div", { className: "item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] " },
                React.createElement("img", { src: tailwind, className: "h-9 w-9 bg-white border p-[2px] rounded-full", alt: "node" }),
                React.createElement("div", { className: "grid p-[4px] mx-1" },
                    React.createElement("h2", { className: "text-[14px] font-bold" }, "TailwindCss"),
                    React.createElement("span", { className: " text-[12px] font-thin text-[#3d3d3d]" }, "Styling"))))));
};
export default UsedServices;
