const copyContentsToClipboard = (node): boolean => {
    let didCopy = false;
    /* eslint-disable no-param-reassign */
    if (node) {
        node.contentEditable = 'true';
        const tempTextContents = node.innerText;
        node.innerText = node.innerText.replace(' ', '');
        const range = document.createRange();
        range.selectNodeContents(node);

        const selection = window.getSelection();

        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);

            didCopy = document.execCommand('copy');
            selection.removeAllRanges();
        }
        node.innerText = tempTextContents;
        node.contentEditable = 'false';
    }
    /* eslint-enable no-param-reassign */
    return didCopy;
};
export default copyContentsToClipboard;
