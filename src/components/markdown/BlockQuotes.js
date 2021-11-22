import React from 'react'

const BlockQuotes = () => {
    return (
        <div id="blockquotes">
            <h2 id="blockquotes-header">Blockquotes</h2>
            <pre>
                <code className="lang-no-highlight">
                    &gt; Blockquotes are very handy <span className="hljs-keyword">in</span> email <span className="hljs-keyword">to</span> emulate reply <span className="hljs-built_in">text</span>. <br />
                    &gt; This line <span className="hljs-keyword">is</span> part <span className="hljs-keyword">of</span> <span className="hljs-keyword">the</span> same <span className="hljs-literal">quote</span>. <br />

                Quote break. <br />

            &gt; This <span className="hljs-keyword">is</span> a very long line <span className="hljs-keyword">that</span> will still be quoted properly when <span className="hljs-keyword">it</span> wraps. Oh boy let's keep writing <span className="hljs-keyword">to</span> make sure this <span className="hljs-keyword">is</span> long enough <span className="hljs-keyword">to</span> actually wrap <span className="hljs-keyword">for</span> everyone. Oh, you can *<span className="hljs-keyword">put</span>* **Markdown** <span className="hljs-keyword">into</span> a blockquote.
            </code></pre>
            <blockquote>
                <p>Blockquotes are very handy in email to emulate reply text.
                This line is part of the same quote.</p>
            </blockquote>
                <p>Quote break.</p>
            <blockquote>
                <p>This is a very long line that will still be quoted properly when it wraps. Oh boy let&#39;s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em> <strong>Markdown</strong> into a blockquote. </p>
            </blockquote>
        </div>
    )
}

export default BlockQuotes
