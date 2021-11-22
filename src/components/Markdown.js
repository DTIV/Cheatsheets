import React from 'react'
import Contents from "./markdown/Contents";
import Headers from "./markdown/Headers";
import Emphasis from "./markdown/Emphasis";
import Lists from "./markdown/Lists";
import Links from "./markdown/Links";
import Images from "./markdown/Images";
import Code from "./markdown/Code";
import Tables from "./markdown/Tables";
import BlockQuotes from "./markdown/BlockQuotes";
import Inline from "./markdown/Inline";
import Rule from "./markdown/Rule";

const Markdown = () => {
    return (
        <div>
            <Contents />
            <Headers />
            <Emphasis />
            <Lists />
            <Links />
            <Images />
            <Code />
            <Tables />
            <BlockQuotes />
            <Inline />
            <Rule />
        </div>
    )
}

export default Markdown
