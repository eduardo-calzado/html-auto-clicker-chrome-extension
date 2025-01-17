document.getElementById('startButton').addEventListener('click', async () => {
    const statusElement = document.getElementById('status');
    const button = document.getElementById('startButton');
    const tagSelector = document.getElementById('tagSelector').value.trim();
    
    if (!tagSelector) {
        statusElement.style.color = 'red';
        statusElement.textContent = 'Please enter a tag selector';
        return;
    }
    
    try {
        button.disabled = true;
        
        statusElement.style.color = 'green';
        statusElement.textContent = 'Opening elements...';
        
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (selector) => {
                const htmlTags = document.querySelectorAll(selector);
                if (htmlTags.length === 0) {
                    return { success: false, message: 'No elements found with this selector' };
                }
                htmlTags.forEach(htmlTag => {
                    htmlTag.click();
                });
                return { success: true, count: htmlTags.length };
            },
            args: [tagSelector]
        }).then(results => {
            const result = results[0].result;
            if (!result.success) {
                statusElement.style.color = 'red';
                statusElement.textContent = result.message;
                return;
            }
            statusElement.textContent = `Completed! Clicked ${result.count} elements`;
        });
        
        // Close popup after 2 seconds
        setTimeout(() => {
            window.close();
        }, 2000);

    } catch (error) {
        console.error('Error:', error);
        statusElement.style.color = 'red';
        statusElement.textContent = 'Process error';
        
        setTimeout(() => {
            window.close();
        }, 2000);
    } finally {
        button.disabled = false;
    }
});