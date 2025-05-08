<?php
/**
 * Plugin Name: Sanne Project Tabs
 * Description: Adds floating tabs with animated notes and text, including toggle icon.
 * Version: 2.5
 * Author: Sem Sannen
 * Author URI: https://semsannen.com
 */

function sanne_enqueue_assets() {
    wp_enqueue_style('sanne-project-style', plugin_dir_url(__FILE__) . 'styles.css');
    wp_enqueue_script('sanne-project-script', plugin_dir_url(__FILE__) . 'script.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'sanne_enqueue_assets');

function sanne_project_shortcode($atts) {
    $atts = shortcode_atts([
        'notes' => 'Interviews,Working Title,Magazine',
        'title' => 'Projecten'
    ], $atts);

    $notes = explode(',', $atts['notes']);
    ob_start(); ?>
    <div class="tab-container tab-right" id="tab-project">
        <div class="tab-handle">
            <h2><?php echo esc_html($atts['title']); ?> <span class="tab-icon" aria-hidden="true"></span></h2>
        </div>
        <div class="tab-content">
            <div class="notes-grid">
                <?php foreach ($notes as $note): 
                    $parts = explode('|', trim($note));
                    $text = esc_html($parts[0]);
                    $url = isset($parts[1]) ? esc_url($parts[1]) : '';
                ?>
                    <div class="note" <?php if ($url): ?>onclick="window.location.href='<?php echo $url; ?>'"<?php endif; ?>>
                        <div class="note-text"><?php echo $text; ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('sanne_project', 'sanne_project_shortcode');

function sanne_text_tab_shortcode($atts) {
    $atts = shortcode_atts([
        'title' => 'Notes',
        'content' => 'This is your custom text content.'
    ], $atts);

    ob_start(); ?>
    <div class="tab-container tab-left" id="tab-text">
        <div class="tab-handle">
            <h2><?php echo esc_html($atts['title']); ?> <span class="tab-icon" aria-hidden="true"></span></h2>
        </div>
        <div class="tab-content">
            <div class="text-body"><?php echo nl2br(wp_kses_post($atts['content'])); ?></div>
        </div>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('sanne_text_tab', 'sanne_text_tab_shortcode');
