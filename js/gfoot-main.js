class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="item-footer">
        <p><strong>Call 07807 457069 for mobile foot care on the Isle of Wight.</strong></p>
        <p>&copy; 2025 Georgina Painter BSc (Hons) Podiatry. All&nbsp;rights&nbsp;reserved.</p>
        <p>HCPC&nbsp;Registered&nbsp;No&nbsp;CH33419</p>
    </div>`;
    }
}

customElements.define('site-footer', SiteFooter);

const fabs = document.querySelectorAll('.fab');

window.addEventListener('scroll', () => {
    fabs.forEach(fab => {
        fab.classList.toggle('fab--visible', window.scrollY > 300);
    });
});

// Turnstile callback (Cloudflare calls this automatically)
window.turnstileReady = function (token) {
    const btn = document.getElementById("submit-btn");

    if (btn) {
        btn.disabled = false;
        btn.classList.add("enabled");
    }
};

// GoatCounter analytics
const gc = document.createElement('script')
gc.dataset.goatcounter = 'https://georginafootcare.goatcounter.com/count'
gc.src = '//gc.zgo.at/count.js'
gc.async = true
document.head.appendChild(gc)


