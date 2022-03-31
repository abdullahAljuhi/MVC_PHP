<?php

namespace App\Controllers;

use \Core\View;
/**
 * Home controller
 * php version 8.0
 */

class Home extends \Core\Controller
{   
    /**
     * Show index page
     * @return void
     */
    public function indexAction(){
        View::render('front/index.php',[
            'username'=>'ali',
            'friends'=>['badr','omer']
        ]);
    }

    // protected function before(){echo " before";}
    // protected function after(){echo " after";}
}