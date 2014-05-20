<?php namespace Eein\Wysiwyg;

/**
 * The plugin.php file (called the plugin initialization script) defines the plugin information class.
 */

use System\Classes\PluginBase;

class Plugin extends PluginBase
{

    public function pluginDetails()
    {
        return [
            'name'        => 'Trumbowyg',
            'description' => 'Open Source WYSIWYG Editor',
            'author'      => 'William Volin @ Woodlands Ad Agency - Trumbowyg by Alex D - http://alex-d.fr/',
            'icon'        => 'icon-leaf'
        ];
    }

     public function registerFormWidgets()
     {
        return [
            'Eein\Wysiwyg\FormWidgets\Trumbowyg' => [
                'label' => 'Trumbowyg',
                'alias' => 'trumbowyg'
            ]
        ];
     }

}