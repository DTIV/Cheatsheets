import React from 'react'

const Tables = () => {
    return (
        <div id="tables">
            <h2 id="tables-header">Tables</h2>
            <p>Tables aren&#39;t part of the core Markdown spec, but they are part of GFM and <em>Markdown Here</em> supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.</p>
            <pre>
                <code className="lang-no-highlight">Colons can be used to align columns.<br />

                    <span className="hljs-params">| Tables        |</span> Are           <span className="hljs-params">| Cool  |</span><br />
                    <span className="hljs-params">| ------------- |</span><span className="hljs-symbol">:-------------</span><span className="hljs-symbol">:|</span> -----<span className="hljs-symbol">:|</span><br />
                    <span className="hljs-params">| col 3 is      |</span> right-aligned <span className="hljs-params">| $1600 |</span><br />
                    <span className="hljs-params">| col 2 is      |</span> centered      <span className="hljs-params">|   $12 |</span><br />
                    <span className="hljs-params">| zebra stripes |</span> are neat      <span className="hljs-params">|    $1 |</span><br /><br />

                    There must be at least <span className="hljs-number">3</span> dashes separating each header cell. <br />
                    The outer pipes (<span className="hljs-params">|) are optional, <span className="hljs-keyword">and</span> you don't need to make the <br />
                    raw Markdown line up prettily. You can also use inline Markdown. <br /><br />

                    Markdown |</span> Less <span className="hljs-params">| Pretty <br />
                    --- |</span> --- <span className="hljs-params">| --- <br />
                    *Still* |</span> <span className="hljs-string">`renders`</span> <span className="hljs-params">| **nicely** <br />
                    1 |</span> <span className="hljs-number">2</span> <span className="hljs-params">| 3</span> <br />
                </code>
            </pre>
            <p>Colons can be used to align columns.</p>
            <table>
            <thead>
            <tr>
            <th>Tables</th>
            <th style={{textAlign:"center"}}>Are</th>
            <th style={{textAlign:"right"}}>Cool</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>col 3 is</td>
            <td style={{textAlign:"center"}}>right-aligned</td>
            <td style={{textAlign:"right"}}>$1600</td>
            </tr>
            <tr>
            <td>col 2 is</td>
            <td style={{textAlign:"center"}}>centered</td>
            <td style={{textAlign:"right"}}>$12</td>
            </tr>
            <tr>
            <td>zebra stripes</td>
            <td style={{textAlign:"center"}}>are neat</td>
            <td style={{textAlign:"right"}}>$1</td>
            </tr>
            </tbody>
            </table>
            <p>There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don&#39;t need to make the raw Markdown line up prettily. You can also use inline Markdown.</p>
            <table>
            <thead>
            <tr>
            <th>Markdown</th>
            <th>Less</th>
            <th>Pretty</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><em>Still</em></td>
            <td><code>renders</code></td>
            <td><strong>nicely</strong></td>
            </tr>
            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Tables
