import Markdown from "./components/Markdown";

function App() {    
  return (
    <div className="App">
      <h1>Markdown Cheatsheet</h1>
        <p>This is intended as a quick reference and showcase. For more complete info, see <a href="http://daringfireball.net/projects/markdown/">John Gruber&#39;s original spec</a> and the <a href="http://github.github.com/github-flavored-markdown/">Github-flavored Markdown info page</a>.</p>
        <p>Note that there is also a <a href="./Markdown-Here-Cheatsheet">Cheatsheet specific to Markdown Here</a> if that&#39;s what you&#39;re looking for. You can also check out <a href="./Other-Markdown-Tools">more Markdown tools</a>.</p>
        
        <Markdown />


        <p><a name="lines"/></p>
        <h2 id="line-breaks">Line Breaks</h2>
        <p>My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You&#39;ll soon learn to get what you want. &quot;Markdown Toggle&quot; is your friend. </p>
        <p>Here are some things to try out:</p>
        <pre><code>Here's a line <span className="hljs-keyword">for</span> us <span className="hljs-keyword">to</span> <span className="hljs-keyword">start with</span>.

        This line <span className="hljs-keyword">is</span> separated <span className="hljs-keyword">from</span> <span className="hljs-keyword">the</span> one <span className="hljs-keyword">above</span> <span className="hljs-keyword">by</span> two newlines, so <span className="hljs-keyword">it</span> will be a *separate <span className="hljs-built_in">paragraph</span>*.

        This line <span className="hljs-keyword">is</span> also a separate <span className="hljs-built_in">paragraph</span>, <span className="hljs-keyword">but</span>...
        This line <span className="hljs-keyword">is</span> only separated <span className="hljs-keyword">by</span> a single newline, so <span className="hljs-keyword">it</span>'s a separate line <span className="hljs-keyword">in</span> <span className="hljs-keyword">the</span> *same <span className="hljs-built_in">paragraph</span>*.
        </code></pre><p>Here&#39;s a line for us to start with.</p>
        <p>This line is separated from the one above by two newlines, so it will be a <em>separate paragraph</em>.</p>
        <p>This line is also begins a separate paragraph, but...<br></br>This line is only separated by a single newline, so it&#39;s a separate line in the <em>same paragraph</em>.</p>
        <p>(Technical note: <em>Markdown Here</em> uses GFM line breaks, so there&#39;s no need to use MD&#39;s two-space line breaks.)</p>
        <p><a name="videos"/></p>
        <h2 id="youtube-videos">YouTube Videos</h2>
        <p>They can&#39;t be added directly but you can add an image with a link to the video like this:</p>
        <pre><code className="lang-no-highlight"><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"http://www.youtube.com/watch?feature=player_embedded&amp;v=YOUTUBE_VIDEO_ID_HERE
        "</span> <span className="hljs-attr">target</span>=<span className="hljs-string">"_blank"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"</span> 
        <span className="hljs-attr">alt</span>=<span className="hljs-string">"IMAGE ALT TEXT HERE"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"240"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"180"</span> <span className="hljs-attr">border</span>=<span className="hljs-string">"10"</span> /&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>
        </code></pre>
        <p>Or, in pure Markdown, but losing the image sizing and border:</p>
        <pre><code className="lang-no-highlight">[<span className="hljs-string">![IMAGE ALT TEXT HERE</span>](<span className="hljs-link">http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg</span>)](<span className="hljs-link">http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE</span>)
        </code></pre>
        <p>Referencing a bug by #bugID in your git commit links it to the slip. For example #1. </p>
        <hr></hr>
        <p>License: <a href="https://creativecommons.org/licenses/by/3.0/">CC-BY</a></p>
    </div>
  );
}


export default App;
