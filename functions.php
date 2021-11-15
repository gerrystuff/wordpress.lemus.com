<?php

function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

function lemusweb_register_styles(){
    $version = wp_get_theme()->get( 'Version' );
    wp_enqueue_style('lemusweb-main-css', get_template_directory_uri() . "/style.css", array('lemusweb-bootstrap'),$version,'all');
    wp_enqueue_style('lemusweb-bootstrap', "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", array(),"5.1.3",'all');
}

add_action('wp_enqueue_scripts','lemusweb_register_styles');

function lemusweb_register_scripts(){
    show_admin_bar( false );
    wp_enqueue_script('lemusweb-jquery', "https://code.jquery.com/jquery-3.6.0.slim.min.js", array(),'3.4.1',true);
    wp_enqueue_script('lemusweb-popper', "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.6.0/umd/popper.min.js", array(),'2.6.0',true);
    wp_enqueue_script('lemusweb-bootstrap', "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js", array(),'5.1.3',true);
    wp_enqueue_script('lemusweb-main', get_template_directory_uri()."/assets/js/main.js", array(),'1.0',true);



}

add_action('wp_enqueue_scripts','lemusweb_register_scripts');


?>
