// ===== رسالة ترحيبية عند تحميل الصفحة =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 Amir Bloom DZ - Bienvenue !');
    alert('🌺 Bienvenue chez Amir Bloom DZ ! Des fleurs qui durent et des souvenirs qui restent. ❤️');
});

// ===== إضافة منتج إلى السلة (محاكاة) =====
function ajouterAuPanier(nomProduit, prix) {
    let confirmation = confirm(`🛒 Voulez-vous ajouter "${nomProduit}" à votre panier ? (${prix} DA)`);
    if (confirmation) {
        alert(`✅ "${nomProduit}" a été ajouté à votre panier ! 🎉`);
    } else {
        alert('❌ Annulé.');
    }
}

// ===== زر "Commander" يظهر رسالة =====
function passerCommande() {
    let nom = prompt('📝 Entrez votre nom :');
    if (nom) {
        alert(`🎁 Merci ${nom} ! Votre commande a été prise en compte. Nous vous contacterons sous 24h. 📞`);
    } else {
        alert('❌ Commande annulée.');
    }
}

// ===== إظهار/إخفاء تفاصيل المنتج =====
function toggleDetails(element) {
    let details = element.nextElementSibling;
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        element.textContent = 'Voir moins 📖';
    } else {
        details.style.display = 'none';
        element.textContent = 'Voir plus 📖';
    }
}

// ===== البحث عن منتج (مثال بسيط) =====
function rechercherProduit() {
    let recherche = document.getElementById('searchInput').value.toLowerCase();
    let produits = document.querySelectorAll('.product-card h3');
    let trouve = false;

    produits.forEach(function(produit) {
        let nom = produit.textContent.toLowerCase();
        let card = produit.closest('.product-card');
        if (nom.includes(recherche)) {
            card.style.display = 'block';
            trouve = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!trouve && recherche !== '') {
        alert('❌ Aucun produit trouvé pour "' + recherche + '".');
    }
}

// ===== إضافة تأثير عند التمرير =====
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// ===== تغيير خلفية الصفحة حسب الوقت =====
function changerThemeSelonHeure() {
    let heure = new Date().getHours();
    let body = document.body;
    if (heure >= 6 && heure < 12) {
        body.style.background = '#fef9f4'; // صباح
    } else if (heure >= 12 && heure < 18) {
        body.style.background = '#fdf6f0'; // بعد الظهر
    } else {
        body.style.background = '#f5ebe8'; // مساء
    }
}
changerThemeSelonHeure();
