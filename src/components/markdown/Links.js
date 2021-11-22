import React from 'react'

const Links = () => {
    return (
        <div id="links">
            <h2 id="links-header">Links</h2>
            <p>There are two ways to create links.</p>
            <pre>
                <code className="lang-no-highlight">
                    [<span className="hljs-string">I'm an inline-style link</span>](<span className="hljs-link">https://www.google.com</span>)<br />

                    [<span className="hljs-string">I'm an inline-style link with title</span>](<span className="hljs-link">https://www.google.com "Google's Homepage"</span>)<br />

                    [<span className="hljs-string">I'm a reference-style link</span>][<span className="hljs-symbol">Arbitrary case-insensitive reference text</span>]<br />

                    [<span className="hljs-string">I'm a relative reference to a repository file</span>](<span className="hljs-link">../blob/master/LICENSE</span>)<br />

                    [<span className="hljs-string">You can use numbers for reference-style link definitions</span>][<span className="hljs-symbol">1</span>]<br />

                    Or leave it empty and use the [link text itself]. <br />

                    URLs and URLs in angle brackets will automatically get turned into links. <br />
                    http://www.example.com or <span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">http:</span>//<span className="hljs-attr">www.example.com</span>&gt;</span></span> and sometimes 
                    example.com (but not on Github, for example). <br />

                    Some text to show that the reference links can follow later. <br />

                    [<span className="hljs-symbol">arbitrary case-insensitive reference text</span>]: <span className="hljs-link">https://www.mozilla.org</span> <br />
                    [<span className="hljs-symbol">1</span>]: <span className="hljs-link">http://slashdot.org</span> <br />
                    [<span className="hljs-symbol">link text itself</span>]: <span className="hljs-link">http://www.reddit.com</span>
                </code>
            </pre>
            <p><a href="https://www.google.com">I&#39;m an inline-style link</a></p>
            <p><a href="https://www.google.com" title="Google&#39;s Homepage">I&#39;m an inline-style link with title</a></p>
            <p><a href="https://www.mozilla.org">I&#39;m a reference-style link</a></p>
            <p><a href="../blob/master/LICENSE">I&#39;m a relative reference to a repository file</a></p>
            <p><a href="http://slashdot.org">You can use numbers for reference-style link definitions</a></p>
            <p>Or leave it empty and use the <a href="http://www.reddit.com">link text itself</a>.</p>
            <p>URLs and URLs in angle brackets will automatically get turned into links. <br />
            <a href="http://www.example.com">http://www.example.com</a> or <a href="http://www.example.com">http://www.example.com</a> and sometimes 
            example.com (but not on Github, for example).</p>
            <p>Some text to show that the reference links can follow later.</p>
        </div>
    )
}

export default Links
