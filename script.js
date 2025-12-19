// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
// === Chargement automatique des documents PDF ===
const documents = [
  {
    file: "Cyberlab.pdf",
    title: "Rapport Environnement de Pentest",
    desc: "Déploiement Suricata, Kali Linux, analyse réseau et tests d’attaques dans un environnement Dockerisé."
  },
  { 
    file: "Rapport BE.pdf", 
    title: "IAM & Contrôle d'accès", 
    desc: "Conception et déploiement d’une infrastructure IAM complète basée sur les principes AAA avec contrôle d’accès RBAC, PKI interne et sécurisation des communications." 
  },
  
 { 
    file: "RapportGLPI.pdf", 
    title: " GLPI – Administration & ITSM", 
    desc: "Mise en place complète de GLPI, incluant l’installation et la configuration des composants nécessaires (Apache, MariaDB, PHP). Le projet couvre la création et la sécurisation de la base de données, la configuration du serveur web et le déploiement de l’application. L’accès à GLPI est sécurisé via HTTPS grâce à un certificat SSL auto-signé généré avec OpenSSL." 
  }
  
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("docs-grid");

  if (!container) return;

  documents.forEach(doc => {
    const card = document.createElement("article");
    card.className = "project"; // même style que tes projets

    card.innerHTML = `
      <h4>📄 ${doc.title}</h4>
      <p>${doc.desc}</p>
      <p style="margin-top:12px;">
        <a href="documents/${doc.file}" target="_blank" style="color:#8cc7ff;text-decoration:none;font-weight:bold;">
          ➜ Voir le document
        </a>
      </p>
    `;

    container.appendChild(card);
  });
});
