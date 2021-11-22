import React from 'react'

const Headers = () => {
    return (
        <div id="headers">
            <h2 id="headers-header">Headers</h2>
            <pre><code className="lang-no-highlight">
            # H1 <br />
            ## H2 <br />
            ### H3 <br />
            #### H4 <br />
            ##### H5 <br />
            ###### H6 <br /><br />

            Alternatively, for H1 and H2, an underline-ish style: <br /><br />

            Alt-H1 <br />
            ====== <br />

            Alt-H2 <br />
            ------ <br />
            </code></pre>
            <h1 id="h1">H1</h1>
            <h2 id="h2">H2</h2>
            <h3 id="h3">H3</h3>
            <h4 id="h4">H4</h4>
            <h5 id="h5">H5</h5>
            <h6 id="h6">H6</h6>
            <p>Alternatively, for H1 and H2, an underline-ish style:</p>
            <h1 id="alt-h1">Alt-H1</h1>
            <hr></hr>
            <h2 id="alt-h2">Alt-H2</h2>
            <hr></hr>
        </div>
    )
}

export default Headers
