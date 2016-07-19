

module.exports = function(grunt) {

    grunt.loadNpmTasks('cssmodeling');

    var configObj = {
        pkg: '<json:package.json>'
    };

    /*==========================
    CSSMODELING
    ==========================*/
    configObj.cssmodeling = configObj.cssmodeling || {};
    configObj.cssmodeling["cssmodeling_12_break_less"] = {
        files: {
            'dist/cssmodeling_col_12_quartered_viewport_breakpoints':
            [
                'cssmodeling_col_12_quartered_viewport_breakpoints.json'
            ]
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_12_break_scss"] = {
        files: {
            'dist/cssmodeling_col_12_quartered_viewport_breakpoints':
            [
                'cssmodeling_col_12_quartered_viewport_breakpoints.json'
            ]
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    /*==========================
    CSSMODELING 12/quartered/viewport
    ==========================*/
    configObj.cssmodeling["cssmodeling_12_less"] = {
        files: {
            'dist/cssmodeling_col_12_quartered_viewport':
            [
                'cssmodeling_col_12_quartered_viewport.json'
            ]
        },
        options: {
            type:"less",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_12_scss"] = {
        files: {
            'dist/cssmodeling_col_12_quartered_viewport':
            [
                'cssmodeling_col_12_quartered_viewport.json'
            ]
        },
        options: {
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.watch = configObj.watch || {};
    configObj.watch["cssmodeling"] = {
        files:[
            '*.json'
        ],
        tasks: ["cssmodeling"]
    };


    grunt.initConfig( configObj );
    grunt.registerTask( 'default' , [
        'cssmodeling'
    ] );

}
