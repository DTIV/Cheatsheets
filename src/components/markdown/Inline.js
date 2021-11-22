import React from 'react'

const Inline = () => {
    return (
        <div id="inline-html">
            <h2 id="inline-html-header">Inline HTML</h2>
            <p>You can also use raw HTML in your Markdown, and it&#39;ll mostly work pretty well. </p>
            <pre><code className="lang-no-highlight"><span className="hljs-tag">&lt;<span className="hljs-name">dl</span>&gt;</span> <br />
            <span className="hljs-tag">&lt;<span className="hljs-name">dt</span>&gt;</span>Definition list<span className="hljs-tag">&lt;/<span className="hljs-name">dt</span>&gt;</span> <br />
            <span className="hljs-tag">&lt;<span className="hljs-name">dd</span>&gt;</span>Is something people use sometimes.<span className="hljs-tag">&lt;/<span className="hljs-name">dd</span>&gt;</span> <br />

            <span className="hljs-tag">&lt;<span className="hljs-name">dt</span>&gt;</span>Markdown in HTML<span className="hljs-tag">&lt;/<span className="hljs-name">dt</span>&gt;</span>
            <span className="hljs-tag">&lt;<span className="hljs-name">dd</span>&gt;</span>Does *not* work **very** well. Use HTML <span className="hljs-tag">&lt;<span className="hljs-name">em</span>&gt;</span>tags<span className="hljs-tag">&lt;/<span className="hljs-name">em</span>&gt;</span>.<span className="hljs-tag">&lt;/<span className="hljs-name">dd</span>&gt;</span>
            <span className="hljs-tag">&lt;/<span className="hljs-name">dl</span>&gt;</span>
            </code></pre>
            <dl>
            <dt>Definition list</dt>
            <dd>Is something people use sometimes.</dd>

            <dt>Markdown in HTML</dt>
            <dd>Does <em>not</em> work <strong>very</strong> well. Use HTML <em>tags</em>.</dd>
            </dl>
        </div>
    )
}

export default Inline
