import React from 'react'

const Images = () => {
    return (
        <div id="images">
            <h2 id="images-header">Images</h2>
            <pre>
                <code className="lang-no-highlight">
                    Here's our logo (hover to see the title text): <br />
                    Inline-style: <br />
                    ![<span className="hljs-string">alt text</span>](<span className="hljs-link">https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1"</span>)<br />
                    Reference-style: <br />
                    ![<span className="hljs-string">alt text</span>][<span className="hljs-symbol">logo</span>]<br />
                    [<span className="hljs-symbol">logo</span>]: <span className="hljs-link">https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"</span>         
                </code>
            </pre>
            <p>Here&#39;s our logo (hover to see the title text):</p>
            <p>Inline-style: 
            <img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 1"></img></p>
            <p>Reference-style: 
            <img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 2"></img></p>
        </div>
    )
}

export default Images
