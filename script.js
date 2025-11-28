// Smooth scroll effect


// Popup message on form submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
});

const icons = document.querySelectorAll(".acc-icon");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        const content = icon.parentElement.nextElementSibling;

        // Tutup semua item lain
        document.querySelectorAll(".acc-content").forEach(c => {
            if (c !== content) c.style.maxHeight = null;
        });
        document.querySelectorAll(".acc-icon").forEach(i => {
            if (i !== icon) i.textContent = "+";
        });

        // Toggle item yang diklik
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "–";
        }
    });
});
