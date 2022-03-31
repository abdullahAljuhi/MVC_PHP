<?php
namespace Elib\App\Controllers;
use \Core\View;
/**
 * Posts controller
 * php version 8.0
 */

class Posts extends \Core\Controller
{   
    /**
     * Show index page
     * @return void
     */
    public function indexAction(){
        View::render('front/index.php');
    }
        /**
     * Show Add new post page
     * @return void
     */
    public function bookdetailsAction(){
        View::render('front/bookdetails.php');
    }
    public function categoryAction(){
        View::render('front/category.php');
    }
    public function checkoutAction(){
        View::render('front/checkout.php');
    }

}