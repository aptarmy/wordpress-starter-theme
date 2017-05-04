<?php

// show swatches in WooCommerce Layered Nav Widget menu item
function apt_variation_swatches($term_html, $term, $link, $count) {

	// requrest necessary plugins
	if(!class_exists('WooCommerce') || !class_exists('TA_WC_Variation_Swatches')) {
		return $term_html;
	}

	// get attribute type [color || image || label]
	$attr  = TA_WCVS()->get_tax_attribute( $term->taxonomy );
	$value = get_term_meta( $term->term_id, $attr->attribute_type, true );
	
	// show swatches in WooCommerce Layered Nav Widget
	switch($attr->attribute_type) {
		case 'color':
			return "<div style='height:1em; width:1em; background-color:$value; float:left; margin-right:0.5em;'></div>" . $term_html;
		default:
			return $term_html;
	}
}
add_filter('woocommerce_layered_nav_term_html', 'apt_variation_swatches', 50, 4);