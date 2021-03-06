# Change log

## [[1.2.5]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.2.5) - 2020-05-21

### Changed
- Removed banners from Woocommerce Checkout and Cart pages.

### Security
- Testing plugin with WordPress latest version 5.4.1
- Fixing formatting errors to meet with WordPress standars.


## [[1.2.4]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.2.4) - 2020-03-30

### Added
- Added in the lazy loading for term images.
- Added in a `lsx_banners_disable_banner_post_content` filter to disable the Homepage banner content.
- Added in a statement to allow the single items to default to the archive banner if needed.

### Changed
- Removing the troublesome title function.
- Updated the `check_admin_referrer` to a 'wp_verify_nonce` field.

### Fixed
- Fixed PHP warning notices with variables.
- Fixed the `Undefined index: banners_plugin_title` error.
- Fixed issue `PHP Deprecated: dbx_post_advanced is deprecated since version 3.7.0! Use add_meta_boxes instead`.


## [[1.2.3]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.2.3) - 2019-09-03

### Added
- Adding the .gitattributes file to remove unnecessary files from the WordPress version.

### Fixed
- Changed the admin class to only run admin_init when it is not an AJAX request.


## [[1.2.2]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.2.2) - 2019-08-23

### Fixed
- Show banners from featured image on old non gutenberg posts correctly.


## [[1.2.1]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.2.1) - 2019-08-06

### Added
- Blog improvements to match new structure for the LSX Blog Customizer.

### Fixed
- Fixed the post type archive titles.
- Fixed the taxonomy admin class.


## [[1.2.0]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.2.0) - 2019-06-19

### Added
- Added in a theme option to allow enabling banners on the events page.
- Added in an options to allow the use the The Events Calendar generated title in the post type archive and single banner.
- Added in a filter to allow the overwriting of the banner tagline for 3rd Party integration `lsx_banner_tagline`.
- Moved the Start and End date to the banner tagline for The Events Calendar.
- Restricted the save meta function for term fields to the taxonomies.
- Removing the restriction on the WooCommerce pages.
- Removing the commented out text.

### Fixed
- Fixed the post type banner not showing on archives with "no posts".


## [[1.1.6]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.1.6) - 2018-11-21

### Added
- Added function for changing the breadcrumbs to the top of the banner
- Added in a filter to allow the alteration to the image_bg_group values. 'lsx_banner_image_bg_group'
- Added in a filter to allow the alteration to the image_group values. 'lsx_banner_image_group'


## [[1.1.5]]()

### Added
- Added in an option to set a title position
- Fixed the add new banner css


## [[1.1.4]]()

### Added
- Added in an "image size" dropdown to the banner metabox panel so you can choose your image size for posts and page banners.
- Changed the Taxonomy banners to call a full image by default.
- Making sure slick.min.js slider is present, this is usually when using LSX banners with a non LSX theme.
- Added in a way to allow the "CMB" field vendor to be excluded.  `define( 'LSX_BANNER_DISABLE_CMB', true );`.


## [[1.1.3]](https://github.com/lightspeeddevelopment/lsx-banners/releases/tag/1.1.3) - 2018-07-12

### Added
- Changed the "Banner" field nonce on the taxonomy term edit pages.
- Added in integration for WP Forms.

### Fixed
- Fixed the edit term "thumbnail" preview.
- Fixed the missing placeholder image settings.


## [[1.1.2]]()

### Added
- Added in a template tag which returns if the current item is disabled - `lsx_is_banner_disabled()`.


## [[1.1.1]]()

### Added
- Added compatibility with LSX Videos.
- Added compatibility with LSX Search.
- Set default banner background colour to black and text colour to white.


## [[1.1.0]]()

### Added
- Added compatibility with LSX 2.0.
- New project structure.
- Added in a filter to allow you to disable the banner altogether.
- Updated the "Add Image" JS for the term image selection (using wp.media).
- Added compatibility to Envira Gallery.
- Added compatibility to Soliloquy.
- UIX copied from TO 1.1 + Fixed issue with sub tabs click (settings).
- New image size: square (`lsx-thumbnail-square`).
- New filter: banner image (`lsx_banner_image`).

### Fixed
* Fix - Updated the license class to work with the new settings button.
* Fix - Multiple images - Randomize banners when there is more than one.
* Fix - Text/tagline front-end and all fields back-end reviewed (made all visible from default).
* Fix - Scripts from CMB loading first than WC scripts (to avoid WC load its select2 script - it breaks the CMB select).
* Fix - LSX tabs working integrated with TO tabs (dashboard settings).

### Changed
- Added new option to make the banner full height or not.
- Made the banner slider option uses Slick Slider.
- Added new fields: button (text, link, class, link/anchor/modal), logo, background colour, text colour.


## [[1.0.6]]()

### Fixed
- Added the missing "full" image size to the placeholder class.
- Before try use the attachment URL, test if it's available.


## [[1.0.5]]()

### Fixed
- Display tagline in blog page.
- Adjusted the plugin settings link inside the LSX API Class.
- Fixed the "banner height" attribute on front-end.
- Fixed banner title on archives.
- Fixed the feature from add/remove images on WP term pages.

### Changed
- Updated the CMB class with custom Google Maps code.


## [[1.0.4]]()

### Added
- Use Soliloquy HTML in front-end slider when it's a Soliloquy slider selected in back-end.
- New option to disable the banner title per page/post.


## [[1.0.3]]()

### Fixed
- Init variable as array and not string to avoid PHP fatal error.


## [[1.0.2]]()

### Fixed
- Fixed all prefixes replaces (to_ > lsx_to_, TO_ > LSX_TO_).


## [[1.0.1]]()

### Fixed
- Reduced the access to server (check API key status) using transients.
- Made the API URLs dev/live dynamic using a prefix "dev-" in the API KEY.


## [[1.0.3]]()

### Added
- First Version
