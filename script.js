document.addEventListener('DOMContentLoaded', () => {
            // Hamburger Menu
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Form Validation
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');

            contactForm.addEventListener('submit', (event) => {
                const nom = document.getElementById('nom').value.trim();
                const prenom = document.getElementById('prenom').value.trim();
                const mail = document.getElementById('mail').value.trim();
                const commentaire = document.getElementById('commentaire').value.trim();

                // Validation
                if (!nom || !prenom || !mail || !commentaire) {
                    event.preventDefault();
                    formMessage.classList.add('error');
                    formMessage.classList.remove('success');
                    formMessage.textContent = 'Veuillez remplir tous les champs correctement.';
                    return;
                }

                // Email Validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(mail)) {
                    event.preventDefault();
                    formMessage.classList.add('error');
                    formMessage.classList.remove('success');
                    formMessage.textContent = 'Veuillez entrer une adresse e-mail valide.';
                    return;
                }

                // Success Message
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                formMessage.textContent = 'Formulaire envoyé avec succès !';
            });
        });