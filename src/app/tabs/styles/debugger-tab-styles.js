var csjs = require('csjs-inject')
var styleGuide = require('@shyftnetwork/shyft_remix-lib').ui.themeChooser
var styles = styleGuide.chooser()

var css = csjs`
  .debuggerTabView {
    padding: 2%;
  }
  .debugger {
    margin-bottom: 1%;
    ${styles.rightPanel.debuggerTab.box_Debugger}
  }
`

module.exports = css
