const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    //convert markdown to HTML
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted html as:",convertedHtml);

    //santize HTML
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });
    console.log("Sanitized HTML as:",sanitizedHtml);

    //convert sanitized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml) ;

    console.log("Sanitized Markfdown as:",sanitizedMarkdown);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;