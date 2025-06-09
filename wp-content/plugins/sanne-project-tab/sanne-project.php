<?php
/**
 * Plugin Name: Sanne Project Tabs
 * Description: Adds floating tabs with animated notes and text, including toggle icon.
 * Version: 2.7
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
        'title'   => 'Projecten',
        'page_id' => ''
    ], $atts);

    $content = '';
    if (!empty($atts['page_id'])) {
        $post = get_post((int) $atts['page_id']);
        if ($post) {
            $content = apply_filters('the_content', $post->post_content);
        }
    }

    ob_start(); ?>
    <div style="z-index: 1003;" class="tab-container tab-right" id="tab-project">
        <div class="tab-handle">
            <h2><?php echo esc_html($atts['title']); ?> <span class="tab-icon" aria-hidden="true"></span></h2>
        </div>
        <div class="tab-content">
            <?php echo $content; ?>
        </div>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('sanne_project', 'sanne_project_shortcode');


function sanne_text_tab_shortcode($atts) {
    $atts = shortcode_atts([
        'title'   => 'Notes',
        'page_id' => ''
    ], $atts);

    $content = '';
    if (!empty($atts['page_id'])) {
        $post = get_post((int) $atts['page_id']);
        if ($post) {
            $content = apply_filters('the_content', $post->post_content);
        }
    }

    ob_start(); ?>
    <div style="z-index: 2;" class="tab-container tab-left" id="tab-text">
        <div class="tab-handle">
            <h2><?php echo esc_html($atts['title']); ?> <span class="tab-icon" aria-hidden="true"></span></h2>
        </div>
        <div class="tab-content">
            <div class="text-body"><?php echo $content; ?></div>
        </div>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('sanne_text_tab', 'sanne_text_tab_shortcode');


function sanne_manifest_tab_shortcode($atts) {
    $atts = shortcode_atts([
        'title'   => 'Manifest',
        'page_id' => ''
    ], $atts);

    $content = '';
    if (!empty($atts['page_id'])) {
        $post = get_post((int) $atts['page_id']);
        if ($post) {
            $content = apply_filters('the_content', $post->post_content);
        }
    }

    ob_start(); ?>
    <div style="z-index: 1;" class="tab-container tab-left-secondary" id="tab-manifest">
        <div class="tab-handle">
            <h2><?php echo esc_html($atts['title']); ?><span class="tab-icon"></span></h2>
        </div>
        <div class="tab-content">
            <div class="text-body"><?php echo $content; ?></div>
        </div>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('sanne_manifest_tab', 'sanne_manifest_tab_shortcode');
