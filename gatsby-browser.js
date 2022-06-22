/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import './src/styles/global.css'
// import './src/styles/prismjs.monokai.css'


import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";

// Themes
// import theme from "prism-react-renderer/themes/vsDark"
// import './src/styles/prismjs.monokai.css' // Change <Highlight theme={undefined} >
import theme from './src/styles/prismjs.monokaiPro'; 

(typeof global !== "undefined" ? global : window).Prism = Prism;

// Include other languages
require("prismjs/components/prism-php");


// Other imports for styling etc.


// CUSTOM MDX (Markdown definitions)
const components = {

  inlineCode: ({ children }) => {

    return (
      <span className="bg-zinc-700" style={{"fontFamily": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", "backgroundColor": "rgb(63 63 70)", "borderRadius": "0.25rem", "color": "rgb(255 255 255)", "padding": "0.25rem 0.5rem",}}>{children}</span>
    );
  },

  pre: props => {
    const className = props.children.props.className || "";
    const code = props.children.props.children.trim();
    const language = className.replace(/language-/, "");
    
    return (
      <Highlight {...defaultProps} code={code} language={language} theme={theme} >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },

  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};