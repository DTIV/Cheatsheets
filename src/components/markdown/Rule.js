import React from 'react'

const Rule = () => {
    return (
        <div id="horizontal-rule">
            <h2 id="horizontal-rule-header">Horizontal Rule</h2>
            <pre><code>Three or more... <br />

            <span className="hljs-meta">---</span> <br />

            Hyphens <br />

            *** <br />

            Asterisks <br />

            ___ <br />

            Underscores <br />
            </code></pre><p>Three or more...</p>
            <hr></hr>
            <p>Hyphens</p>
            <hr></hr>
            <p>Asterisks</p>
            <hr></hr>
            <p>Underscores</p>
        </div>
    )
}

export default Rule
