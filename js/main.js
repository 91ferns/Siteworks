require.config({
    baseUrl: siteConfig.fullURL + 'vendor/components/',
    paths: {
        jquery: 'jquery/dist/jquery.min',
        bootstrap_js: 'bootstrap-sass/assets/javascripts/bootstrap.min',
        scroll_magic: 'ScrollMagic/js/jquery.scrollmagic.min',
        jasny: 'jasny-bootstrap/dist/js/jasny-bootstrap.min',
        holder: 'https://cdnjs.cloudflare.com/ajax/libs/holder/2.4.1/holder'
    },
    shim: {
      "bootstrap_js": ['jquery', 'holder'],
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
