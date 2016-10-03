# LSX Banners

Use with the lsx or storefront themes.

## Enable Functionality Via Filters

Enable the use of a placeholder service,  currently placeholdit

```add_filter('lsx_banner_enable_placeholder', function( $bool ) { return true; });```

Customize the placeholder service.

```add_filter('lsx_banner_placeholder_url', function( $url ) { return 'https://placeholdit.imgix.net/~text?txtsize=33&txt=1920%20600&w=1920&h=600'; });```

Enable the Use of a custom title

```add_filter('lsx_banner_enable_title', function( $bool ) { return true; });```

Enable the Use of a subtitle

```add_filter('lsx_banner_enable_subtitle', function( $bool ) { return true; });```

Enable YouTube Videos
```add_filter('lsx_banner_enable_video', function( $bool ) { return true; });```

Disable the content of the banner on a per post basis

```add_filter('lsx_banner_disable_text', function( $bool ) { return true; });```

If your theme has bootstrap included, then you can enable the slider with the following filter.

```add_filter('lsx_banner_enable_sliders', function( $bool ) { return true; });```

## Post Type Archives
All you need to do is to create a "page" with the same "slug" as the post type archives slug, then upload the page to upload a banner image etc.

## Adding additional content to your banner
```add_action('lsx_banner_content','your_function_name');```

### Inside lsx_banner_content()
```add_action('lsx_banner_container_top','your_function_name');```
```add_action('lsx_banner_container_bottom','your_function_name');```

## Modifying the slider settings
You will have 1 variable, an array as follows.
```array('transition' => 'slide','interval' => '6000',);```
```add_filter('lsx_banner_slider_settings','your_function_name',1,10);```

# Changelog

## 1.1.0
 * Fixed the disabling of banner and title not showing with the LSX Theme

## 1.0
 * First Version