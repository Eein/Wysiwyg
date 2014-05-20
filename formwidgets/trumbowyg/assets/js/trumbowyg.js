/*
 * Rich text editor form field control (WYSIWYG)
 *
 * Data attributes:
 * - data-control="richeditor" - enables the rich editor plugin
 *
 * JavaScript API:
 * $('textarea').richEditor()
 *
 * Dependancies:
 * - Trumbowyg - http://alex-d.github.io/Trumbowyg/#home
 */
+function ($) { "use strict";

    // Initialize
    // ===============
    $(document).render(function () {

    	$.extend(true, $.trumbowyg, {
                upload: {
		            serverPath: '/eein/wysiwyg/upload/' + $('#Form-form-field-Post-slug').val() + '/'
		        }
            });
        $('[data-control="trumbowyg"] textarea').trumbowyg({        
        		fixedBtnPane: true,
         		autogrow: true,
                btnsDef: {
                    // Customizables dropdowns
                    align: {
                        dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                        ico: 'justifyLeft'
                    },
                    image: {
                        dropdown: ['insertImage', 'upload'],
                        ico: 'insertImage'
                    }
                },
                btns: ['viewHTML',
                '|', 'formatting',
                '|', 'bold',
                 	 'italic',
                 	 'underline',
                 	 'strikethrough',
                '|', 'link',
                '|', 'image',
                '|', $.trumbowyg.btnsGrps.justify,
                '|', $.trumbowyg.btnsGrps.lists,
                '|', 'horizontalRule']
            });

    });

}(window.jQuery);
