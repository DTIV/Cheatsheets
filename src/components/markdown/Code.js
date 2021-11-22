import React from 'react'

const Code = () => {
    return (
        <div id="code">
            <h2 id="code-header">Code and Syntax Highlighting</h2>
            <p>Code blocks are part of the Markdown spec, but syntax highlighting isn&#39;t. However, many renderers -- like Github&#39;s and <em>Markdown Here</em> -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. <em>Markdown Here</em> supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the <a href="http://softwaremaniacs.org/media/soft/highlight/test.html">highlight.js demo page</a>.</p>
            <pre><code className="lang-no-highlight">Inline `<span className="hljs-keyword">code</span>` has `back-ticks around` it.
            </code></pre>
            <p>Inline <code>code</code> has <code>back-ticks around</code> it.</p>
            <p>Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they&#39;re easier and only they support syntax highlighting.</p>
            <pre lang="no-highlight">
                <code>
                    ```javascript <br />
            var s = "JavaScript syntax highlighting"; <br />
            alert(s); <br />
            ``` <br /><br />

            ```python <br />
            s = "Python syntax highlighting" <br />
            print s <br />
            ```<br /><br />

            ```<br />
            No language indicated, so no syntax highlighting. <br />
            But let's throw in a &lt;b&gt;tag&lt;/b&gt;. <br />
            ```<br />
                </code>
            </pre>



            <pre>
                <code className="lang-javascript">
                    var s = <span className="hljs-string">"JavaScript syntax highlighting"</span><span className="hljs-comment">;</span><br />
                    alert(s)<span className="hljs-comment">;</span>
                </code>
            </pre>
            <pre>
                <code className="lang-python">
                    s = <span className="hljs-string">"Python syntax highlighting"</span><br />
                <span className="hljs-keyword">print</span> <span className="hljs-built_in">s</span>
                </code>
            </pre>
            <pre>
                <code>
                    <span className="hljs-keyword">No</span> language indicated, <span className="hljs-keyword">so</span> <span className="hljs-keyword">no</span> <span className="hljs-keyword">syntax</span> highlighting <span className="hljs-keyword">in</span> Markdown Here (varies <span className="hljs-keyword">on</span> Github). <br />
                    But let's throw <span className="hljs-keyword">in</span> a &lt;b&gt;tag&lt;/b&gt;.
                </code>
            </pre>
        </div>
    )
}

export default Code
