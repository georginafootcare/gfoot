//gfoot using Oakwood Framework v4.1.0
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer-site">
                <div class="footer-item">
                    <p><strong>Call 07807 457069 for mobile foot care on the Isle&nbsp;of&nbsp;Wight.</strong></p>
                    <p>&copy; 2025 Georgina Painter BSc (Hons) Podiatry. All&nbsp;rights&nbsp;reserved.</p>
                    <p>HCPC&nbsp;Registered&nbsp;No&nbsp;CH33419</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-site', SiteFooter);

const fabs = document.querySelectorAll('.fab');

window.addEventListener('scroll', () => {
    fabs.forEach(fab => {
        fab.classList.toggle('fab--visible', window.scrollY > 300);
    });
});

// GoatCounter analytics
const gc = document.createElement('script')
gc.dataset.goatcounter = 'https://georginafootcare.goatcounter.com/count'
gc.src = '//gc.zgo.at/count.js'
gc.async = true
document.head.appendChild(gc)


