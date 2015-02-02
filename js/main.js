require.config({
    baseUrl: siteConfig.fullURL + 'vendor/components/',
    paths: {
        jquery: 'jquery/dist/jquery.min',
        bootstrap_js: 'bootstrap-sass/assets/javascripts/bootstrap.min',
        scroll_magic: 'ScrollMagic/js/jquery.scrollmagic.min',
        jasny: 'jasny-bootstrap/dist/js/jasny-bootstrap.min'
    },
    shim: {
      "bootstrap_js": ['jquery'],
      "scroll_magic": ['jquery'],
      "jasny": ['jquery', 'bootstrap_js'],
      'scroll_magic': {
        deps: ['jquery'],
        exports: 'ScrollMagic'
      }
    }
});

require(['jquery', 'bootstrap_js', 'jasny'], function($) {

  //$('body').scrollspy({ target: '#navbar' });


});
