<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/** CSS child dépend du parent */
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'astra-child-style',
        get_stylesheet_uri(),
        [ 'astra-theme-css' ],
        wp_get_theme()->get( 'Version' )
    );
}, 20 );

/** Kill tout le footer Astra puis injecter le tien */
add_action( 'wp', function () {
    // Supprime toutes les callbacks déjà ajoutées au hook astra_footer
    remove_all_actions( 'astra_footer' );

    // Ajoute TON footer
    add_action( 'astra_footer', 'astra_child_footer_markup' );
} );


/** Kill tout le header Astra puis injecter le tien */
add_action( 'wp', function () {
    // Supprime toutes les callbacks déjà ajoutées au hook astra_header
    remove_all_actions( 'astra_header' );

    // Ajoute TON header
    add_action( 'astra_header', 'astra_child_header_markup' );
} );
function astra_child_header_markup() { ?>

<div class="header">
    <a>Home </a>
    <a>Projets</a>
    <a>Portfolio</a>
    <a>Contact</a>
</div>
<?php } 




// Avant footer
add_action( 'astra_footer_before', 'portfolio_footer_before_section' );


function portfolio_footer_before_section() { ?>
    <section class="footer-before">
        <div class="footer-before-inner">
            <h2>Travaillons ensemble</h2>
            <p>Vous avez un projet, une idée ou simplement envie d’échanger ?</p>
            <a href="#" class="footer-btn">Me contacter</a>
        </div>
    </section>
<?php }






function astra_child_footer_markup() { ?>
    <footer class="site-footer ast-container">
        <div class="footer-inner">
            
            <div class="footer-section footer-about">
                <h4 class="footer-title">À propos</h4>
                <p>Nous créons des sites rapides, accessibles et élégants, pensés pour offrir la meilleure expérience utilisateur.</p>
            </div>

            <div class="footer-section footer-links">
                <h4 class="footer-title">Liens utiles</h4>
                <ul class="footer-menu">
                    <li><a href="/boutique">Boutique</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/mentions-legales">Mentions légales</a></li>
                    <li><a href="/confidentialite">Politique de confidentialité</a></li>
                </ul>
            </div>

            <div class="footer-section footer-social">
                <h4 class="footer-title">Suivez-nous</h4>
                <ul class="social-links">
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> Instagram</a></li>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"> Facebook</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a></li>
                </ul>
            </div>

        </div>

        <div class="footer-bottom">
            <p class="copy">© <?php echo date('Y'); ?> — <strong>PapeB</strong>. Tous droits réservés.</p>
        </div>
    </footer>
<?php } 
