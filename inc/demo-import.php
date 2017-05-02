<?php

// This filter is defined by one-click-demo-import plugin
// readmore at http://proteusthemes.github.io/one-click-demo-import/#basic-import-setup
/*
function apt_demo_import() {
  return array(
    array(
      'import_file_name'             => 'Demo Import 1',
      'categories'                   => array( 'Category 1', 'Category 2' ),
      'local_import_file'            => trailingslashit( get_template_directory() ) . 'ocdi/demo-content.xml',
      'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'ocdi/widgets.json',
      'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'ocdi/customizer.dat',
      'local_import_redux'           => array(
        array(
          'file_path'   => trailingslashit( get_template_directory() ) . 'ocdi/redux.json',
          'option_name' => 'redux_option_name',
        ),
      ),
      'import_preview_image_url'     => 'http://www.your_domain.com/ocdi/preview_import_image1.jpg',
      'import_notice'                => __( 'After you import this demo, you will have to setup the slider separately.', 'your-textdomain' ),
    ),
    array(
      'import_file_name'             => 'Demo Import 2',
      'categories'                   => array( 'New category', 'Old category' ),
      'local_import_file'            => trailingslashit( get_template_directory() ) . 'ocdi/demo-content2.xml',
      'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'ocdi/widgets2.json',
      'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'ocdi/customizer2.dat',
      'local_import_redux'           => array(
        array(
          'file_path'   => trailingslashit( get_template_directory() ) . 'ocdi/redux.json',
          'option_name' => 'redux_option_name',
        ),
        array(
          'file_path'   => trailingslashit( get_template_directory() ) . 'ocdi/redux2.json',
          'option_name' => 'redux_option_name_2',
        ),
      ),
      'import_preview_image_url'     => 'http://www.your_domain.com/ocdi/preview_import_image2.jpg',
      'import_notice'                => __( 'A special note for this import.', 'your-textdomain' ),
    ),
  );
}
add_filter( 'pt-ocdi/import_files', 'apt_demo_import' );*/