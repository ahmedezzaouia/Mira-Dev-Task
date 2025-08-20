/**
 * ColorSectionRenderer
 * Enables smooth AJAX-based product section updates when selecting related product color swatches.
 * 
 * @property {string} sectionId - The Shopify section ID to update.
 * @property {string} [selector] - CSS selector for clickable related product links (default: '[data-related-product-url]').
 */

class ColorSectionRenderer {
  constructor(options) {
    this.sectionId = options.sectionId;
    this.selector = options.selector || '[data-related-product-url]';
    this.init();
  }

  init() {
    const links = document.querySelectorAll(this.selector);
    
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        if (link.classList.contains('variant-option__button-label--current')) return;
        
        event.preventDefault();
        const productUrl = link.dataset.relatedProductUrl;
        
        if (!productUrl) return;
        
        const currentSection = document.querySelector(`#shopify-section-${this.sectionId}`);
        if (!currentSection) return;

        // Simple opacity transition
        currentSection.style.transition = 'opacity 50ms ease-out';
        currentSection.style.opacity = '0.5';
        
        fetch(`${productUrl}?section_id=${this.sectionId}`)
          .then(response => response.text())
          .then(html => {
            if (currentSection && html.trim()) {
              setTimeout(() => {
                currentSection.outerHTML = html;
                
                const newSection = document.querySelector(`#shopify-section-${this.sectionId}`);
                if (newSection) {
                  newSection.style.opacity = '1';
                  newSection.style.transition = 'opacity 50ms ease-in';
                }
                
                // Update current state
                document.querySelectorAll('.variant-option__button-label--current').forEach(el => 
                  el.classList.remove('variant-option__button-label--current')
                );
                link.classList.add('variant-option__button-label--current');
                
                // Update URL
                history.pushState({}, '', productUrl);
                
                // Re-initialize
                this.init();
              }, 50);
            }
          })
          .catch(() => {
            window.location.href = productUrl;
          });
      });
    });
  }
}

// Make it globally available
window.ColorSectionRenderer = ColorSectionRenderer;