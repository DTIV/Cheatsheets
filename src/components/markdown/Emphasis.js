import React from 'react'

const Emphasis = () => {
    return (
        <div id="emphasis">
            <h2 id="emphasis-header">Emphasis</h2>
            <pre>
                <code className="lang-no-highlight">
                    Emphasis, aka italics, <span className="hljs-keyword">with</span> *asterisks* <span className="hljs-keyword">or</span> _underscores_. <br />
                    <span className="hljs-keyword">Strong</span> emphasis, aka bold, <span className="hljs-keyword">with</span> **asterisks** <span className="hljs-keyword">or</span> __underscores__. <br />
                    Combined emphasis <span className="hljs-keyword">with</span> **asterisks <span className="hljs-keyword">and</span> _underscores_**. <br />
                    Strikethrough <span className="hljs-keyword">uses</span> two tildes. ~~Scratch this.~~
                </code>
            </pre>
            <p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>
            <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
            <p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>
            <p>Strikethrough uses two tildes. <del>Scratch this.</del></p>
        </div>
    )
}

export default Emphasis
