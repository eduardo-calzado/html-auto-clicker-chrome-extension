# Element Auto Clicker Chrome Extension

A simple yet powerful Chrome extension that automatically clicks on multiple elements on a webpage based on your specified CSS selector.

## Features

- 🎯 Click multiple elements simultaneously using CSS selectors
- ⚡ Fast and efficient execution
- 🎨 Visual feedback with status messages
- 🔒 Safe execution with error handling
- 👀 Real-time status updates
- 🚀 Auto-closes after completion

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## How to Use

1. Click the extension icon in your Chrome toolbar
2. Enter a CSS selector in the input field (e.g., `button.submit-class`, `.click-me`, `#special-button`)
3. Click the "Start" button
4. The extension will automatically click all matching elements on the current page

## Examples of CSS Selectors

### Basic Selectors
- `.classname` - Selects elements with a specific class
- `#idname` - Selects an element with a specific ID
- `button` - Selects all button elements
- `div.classname` - Selects div elements with a specific class
- `[data-attribute="value"]` - Selects elements with a specific data attribute

### Advanced Selectors
- `button:not(.disabled)` - Selects all buttons except those with class 'disabled'
- `div > button` - Selects buttons that are direct children of div elements
- `.container button` - Selects buttons inside elements with class 'container'
- `button[type="submit"]` - Selects submit buttons
- `.item:nth-child(2)` - Selects the second element with class 'item'

### Real-World Examples

#### Social Media
- `button[aria-label*="Like"]` - Click all like buttons
- `.follow-button:not(.following)` - Click all unfollow buttons
- `[data-testid="retweet"]` - Click all retweet buttons

#### E-commerce
- `.add-to-cart-button` - Add multiple items to cart
- `.product-card .wishlist-icon` - Add multiple items to wishlist
- `button[data-action="quick-view"]` - Open all quick view modals

#### General Web
- `.cookie-consent-accept` - Accept cookie notices
- `.modal .close-button` - Close all modal windows
- `.expand-more` - Expand all collapsible sections
- `.notification-dismiss` - Dismiss all notifications

## Status Messages

- 🟢 "Opening elements..." - Process started
- 🟢 "Completed! Clicked X elements" - Successful completion
- 🔴 "No elements found with this selector" - No matching elements
- 🔴 "Please enter a tag selector" - Empty input
- 🔴 "Process error" - Execution error

## Technical Details

The extension uses:
- Chrome Extensions Manifest V3
- Chrome Scripting API
- Modern JavaScript with async/await
- DOM manipulation

## Security

The extension:
- Only runs on the active tab
- Requires explicit user action to execute
- Has minimal permissions requirements
- Includes error handling

## Use Cases

1. **Batch Processing**
   - Mass-liking content on social media
   - Bulk-selecting checkboxes in forms
   - Opening multiple product details in e-commerce sites

2. **Web Automation**
   - Clicking through paginated content
   - Expanding all collapsed sections
   - Dismissing multiple notifications

3. **Testing**
   - Testing click handlers on multiple elements
   - Verifying button states
   - Stress testing UI components

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any problems or have suggestions, please open an issue in the repository.

## Tips for Best Results

1. Always test selectors first using Chrome DevTools console with `document.querySelectorAll()`
2. Start with more specific selectors to avoid unintended clicks
3. Use the browser's element inspector to find the most reliable selectors
4. Consider page load state when clicking multiple elements

---

Made by @eduardo-calzado with ❤️ for the Chrome community