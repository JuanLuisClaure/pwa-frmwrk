const riot = require('riot')
riot.tag2('componente-uno', '<figure> <figcaption> <b> Just css waoo </b></figcaption> <pre class="prettyprint lang-css">\n\n  class Voila {public:     // Voila     static const string VOILA = ⁗Voila⁗;     // will not interfere with embedded <a href=⁗#voila2⁗>tags</a>.}\n\n</pre> </figure> <br>', 'componente-uno .algo,[data-is="componente-uno"] .algo{ background-color:red; }', '', function(opts) {
});
