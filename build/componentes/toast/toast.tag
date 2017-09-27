const riot = require('riot');

<toast>

  <div id="demo-toast-example" class="mdl-js-snackbar mdl-snackbar" style="z-index:13;">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button"></button>
  </div>


  <script>


  this.on('mount', ()=>{
    let mensaje = opts.m
    let snackbarContainer = document.querySelector('#demo-toast-example');
    if (mensaje) {
        this.update()
        snackbarContainer.MaterialSnackbar.showSnackbar(mensaje)
    }
  })

  this.on('updated', ()=>{
    componentHandler.upgradeDom();
  })





  </script>
</toast>
