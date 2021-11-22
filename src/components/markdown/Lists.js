import React from 'react'

const Lists = () => {
    return (
        <div id="lists">
            <h2 id="lists-header">Lists</h2>
            <p>(In this example, leading and trailing spaces are shown with with dots: ⋅)</p>
            <pre>
            <code className="lang-no-highlight"><span className="hljs-number">
                1.</span> First ordered <span className="hljs-built_in">list</span> <span className="hljs-built_in">item</span> <br />
                <span className="hljs-number">2.</span> Another <span className="hljs-built_in">item</span> <br />
                ⋅⋅* Unordered sub-<span className="hljs-built_in">list</span>.  <br />
                <span className="hljs-number">1.</span> Actual numbers don't matter, just <span className="hljs-keyword">that</span> <span className="hljs-keyword">it</span>'s a <span className="hljs-built_in">number</span> <br />
                ⋅⋅<span className="hljs-number">1.</span> Ordered sub-<span className="hljs-built_in">list</span> <br />
                <span className="hljs-number">4.</span> And another <span className="hljs-built_in">item</span>. <br />
                ⋅⋅⋅You can have properly indented <span className="hljs-built_in">paragraphs</span> within <span className="hljs-built_in">list</span> items. Notice <span className="hljs-keyword">the</span> blank line <span className="hljs-keyword">above</span>, <span className="hljs-keyword">and</span> <span className="hljs-keyword">the</span> leading spaces (<span className="hljs-keyword">at</span> least one, <span className="hljs-keyword">but</span> we'll use three here <span className="hljs-keyword">to</span> also align <span className="hljs-keyword">the</span> raw Markdown). <br />
                ⋅⋅⋅To have a line break <span className="hljs-keyword">without</span> a <span className="hljs-built_in">paragraph</span>, you will need <span className="hljs-keyword">to</span> use two trailing spaces.⋅⋅ <br />
                ⋅⋅⋅Note <span className="hljs-keyword">that</span> this line <span className="hljs-keyword">is</span> separate, <span className="hljs-keyword">but</span> within <span className="hljs-keyword">the</span> same <span className="hljs-built_in">paragraph</span>.⋅⋅ <br />
                ⋅⋅⋅(This <span className="hljs-keyword">is</span> contrary <span className="hljs-keyword">to</span> <span className="hljs-keyword">the</span> typical GFM line break behaviour, <span className="hljs-keyword">where</span> trailing spaces are <span className="hljs-keyword">not</span> required.) <br />
                * Unordered <span className="hljs-built_in">list</span> can use asterisks <br />
                - Or minuses <br />
                + Or pluses <br />
            </code>
            </pre>
            <ol>
            <li>First ordered list item</li>
            <li>Another item</li>
                <ul>
                <li>Unordered sub-list. </li>
                </ul>
            <li>Actual numbers don&#39;t matter, just that it&#39;s a number</li>
            <ol>
                <li>Ordered sub-list</li>
            </ol>

            <li><p>And another item.</p>
                <p>You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we&#39;ll use three here to also align the raw Markdown).</p>
                <p>To have a line break without a paragraph, you will need to use two trailing spaces.<br></br>Note that this line is separate, but within the same paragraph.<br></br>(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p>
            </li>
            </ol>
            <ul>
                <li>
                    <p>Unordered list can use asterisks</p>
                </li>
                <li>Or minuses</li>
                <li>Or pluses</li>
            </ul>
        </div>
    )
}

export default Lists
