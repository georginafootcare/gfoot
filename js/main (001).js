class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="item-footer">
        <p><strong>Call 07807 457069 for mobile foot care on the Isle of Wight.</strong></p>
        <p>&copy; 2025 Georgina Painter BSc (Hons) Podiatry. All&nbsp;rights&nbsp;reserved.</p>
        <p>HCPC&nbsp;Registered&nbsp;No&nbsp;CH33419. (Ref js)</p>
    </div>`
        const script = document.createElement('script')
        script.dataset.goatcounter = 'https://acme.goatcounter.com/count'
        script.src = '//gc.zgo.at/count.js'
        script.async = true
        document.head.appendChild(script)
    }
}
customElements.define('site-footer', SiteFooter)

const fabs = document.querySelectorAll('.fab')

window.addEventListener('scroll', () => {
    fabs.forEach(fab => {
        fab.classList.toggle('fab--visible', window.scrollY > 300)
    })
})
